using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Linq;
using System.ServiceProcess;
using System.Text;
using System.Threading.Tasks;
using System.Timers;
using System.Net;

namespace SMSBulkDaemon
{
    public partial class SMSService : ServiceBase
    {

        EventLog log;
        Timer poolingReservationTimer;
        Timer paymentTimer;
        Timer CancelTimer;

        static string GoyangFieldId = "AKNE43";

#if DEBUG
        static string Url = "https://was.aglcms.com";
        //static string Url = "http://localhost:44388";
#else
        static string Url = "https://pwas2.aglcms.com";
#endif

        public SMSService()
        {
            InitializeComponent();
            log = new EventLog();
            if (!EventLog.SourceExists("SMS Service Daemon"))
            {
                System.Diagnostics.EventLog.CreateEventSource("SMS Service Daemon", "SMS Log");
            }
            log.Source = "SMS Service Daemon";
            log.Log = "SMS Log";

            poolingReservationTimer = new Timer();
            poolingReservationTimer.Interval = 40000;
            poolingReservationTimer.Elapsed += poolingReservationTimer_Elapsed;

            paymentTimer = new Timer();
            paymentTimer.Interval = 401000; // 10분에 한 번, 페이먼트와 체크아웃을 같이 함 
            paymentTimer.Elapsed += PaymentTimer_Elapsed;

            CancelTimer = new Timer();
            CancelTimer.Interval = 3600000; // 1시간
            CancelTimer.Elapsed += CancelTimer_Elapsed;
        }
               

        // 결제 및 결제 내역 전송?
        private void PaymentTimer_Elapsed(object sender, ElapsedEventArgs e)
        {

            DateTime now = DateTime.UtcNow.AddHours(9);
            DateTime checkoutNow = now;
            string endTime = now.AddMinutes(30).ToString("HHmm"); // 티오프 30분 전에 결제

            //결제
            try
            {
                log.WriteEntry("결제 진입 " + now.ToString("HH:mm:ss") + " 이전 시각의 자동 체크인 내역");
                log.WriteEntry(Url + $"/api/GreenIT/PaymentBatch/{GoyangFieldId}|" + now.ToString("yyyyMMdd") + "||" + endTime);
                WebClient client = new WebClient();
                string reply = client.DownloadString(Url + $"/api/GreenIT/PaymentBatch/{GoyangFieldId}|" + now.ToString("yyyyMMdd") + "||" + endTime);
                log.WriteEntry(reply);
            }
            catch (Exception ex)
            {
                log.WriteEntry("Server Returns Error : " + ex.ToString(), EventLogEntryType.Error);
            }

            // 결제 내역 전송
            try
            {
                WebClient client = new WebClient();
                string reply = client.DownloadString(Url + $"/api/GreenIT/PaySyncBatch/{GoyangFieldId}");
                log.WriteEntry(reply);
            }
            catch (Exception ex)
            {
                log.WriteEntry("Server Returns Error : " + ex.ToString(), EventLogEntryType.Error);
            }



            //if (now.Hour >= 8)
            //{
            //    if (now.Hour < 18)
            //    {
            //        now = now.AddHours(-3).AddMinutes(-30); // 3시간 30 분 전 데이터를 처리함 
            //    }
            //    else
            //    {
            //        now = now.AddMinutes(-20); // 3시간 30 분 전 데이터를 처리함 
            //    }
            //    try
            //    {
            //        log.WriteEntry("결제 진입 " + now.ToString("HH:mm:ss") + " 이전 시각의 자동 체크인 내역");
            //        log.WriteEntry(Url + $"/api/Daemon/InsertCandidateCard/{GoyangFieldId}|" + now.ToString("yyyyMMdd") + "||" + now.ToString("HHmm"));
            //        WebClient client = new WebClient();
            //        string reply = client.DownloadString(Url + $"/api/Daemon/InsertCandidateCard/{GoyangFieldId}|" + now.ToString("yyyyMMdd") + "||" + now.ToString("HHmm"));
            //        log.WriteEntry(reply);
            //    }
            //    catch (Exception ex)
            //    {
            //        log.WriteEntry("Server Returns Error : " + ex.ToString(), EventLogEntryType.Error);
            //    }
            //}
            //else
            //{
            //    log.WriteEntry("결제 진입 시각 미달");
            //}

            //if(checkoutNow.Hour < 18)
            //{
            //    now = checkoutNow.AddHours(-6).AddMinutes(-10);
            //}
            //else 
            //{
            //    now = checkoutNow.AddMinutes(-30);
            //}

            //// 체크아웃이 먼저 가면 안되므로, 보내기 전에 티타임 정보 먼저 송신 처리 
            //try
            //{
            //    WebClient client = new WebClient();
            //    string reply = client.DownloadString(Url + $"/api/Daemon/QueryPKofMemberForSync/{GoyangFieldId}");
            //    log.WriteEntry(reply);
            //}
            //catch (Exception ex)
            //{
            //    log.WriteEntry("Server Returns Error : " + ex.ToString(), EventLogEntryType.Error);
            //}

            //try
            //{
            //    log.WriteEntry("체크아웃 " + now.ToString("HH:mm:ss") + " 이전 시각의 자동 결제 내역");
            //    log.WriteEntry(Url + $"/api/Daemon/SetCheckoutForPartner/{GoyangFieldId}|" + now.ToString("yyyyMMdd") + "|" + now.ToString("HHmm"));
            //    WebClient client = new WebClient();
            //    string reply = client.DownloadString(Url + $"/api/Daemon/SetCheckoutForPartner/{GoyangFieldId}|" + now.ToString("yyyyMMdd") + "|" + now.ToString("HHmm"));
            //    log.WriteEntry(reply);
            //}
            //catch (Exception ex)
            //{
            //    log.WriteEntry("Server Returns Error : " + ex.ToString(), EventLogEntryType.Error);
            //}
        }

        // 예약 별 예약 확인 => 취소 예약 확인용
        private void CancelTimer_Elapsed(object sender, ElapsedEventArgs e)
        {
            DateTime now = DateTime.UtcNow.AddHours(9);            
            if (now.Hour > 19 && now.Hour < 4) // 저녁 7시부터 새벽 4시까지만(골프장 영업시간 제외)
            {
                try
                {
                    log.WriteEntry(Url + $"/api/GreenIT/UpdateTeetimeAndCheckinBatch/{GoyangFieldId}|");
                    WebClient client = new WebClient();
                    string reply = client.DownloadString(Url + $"/api/GreenIT/UpdateTeetimeAndCheckinBatch/{GoyangFieldId}|");
                    log.WriteEntry(reply);
                }
                catch (Exception ex)
                {
                    log.WriteEntry("Server Returns Error : " + ex.ToString(), EventLogEntryType.Error);
                }
            }
        }


        private int healthcheck = 0;
        private int healthcheck1 = 0;
        private int hour = 0;

        // 예약 조회 폴링, 내장객 전송, 내장객 조회 폴링
        private void poolingReservationTimer_Elapsed(object sender, ElapsedEventArgs e)
        {
            poolingReservationTimer.Stop();
            healthcheck1++;

            ServicePointManager.Expect100Continue = true;
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Ssl3 | SecurityProtocolType.Tls | SecurityProtocolType.Tls11 | SecurityProtocolType.Tls12;
            ServicePointManager.ServerCertificateValidationCallback = delegate { return true; };

            log.WriteEntry("Tick");

            DateTime now = DateTime.UtcNow.AddHours(9);

            if (healthcheck1 > 360)
            {
                hour++;
                log.WriteEntry(hour + " Times elipsed from sms daemon started", EventLogEntryType.Information);
            }
            // 예약 조회 폴링
            try
            {
                WebClient client = new WebClient();
                string reply = client.DownloadString(Url + $"/api/GreenIT/PollingBatch/{GoyangFieldId}");
                
                log.WriteEntry(reply);
            }
            catch (Exception ex)
            {
                log.WriteEntry("Server Returns Error : " + ex.ToString(), EventLogEntryType.Error);
            }


            if (healthcheck1 > 360)
            {
                hour++;
                log.WriteEntry(hour + " Times elipsed from sms daemon started", EventLogEntryType.Information);
            }
            // 내장객 전송
            try
            {
                WebClient client = new WebClient();
                string reply = client.DownloadString(Url + $"/api/GreenIT/MemberSyncBatch/{GoyangFieldId}");
                log.WriteEntry(reply);
            }
            catch (Exception ex)
            {
                log.WriteEntry("Server Returns Error : " + ex.ToString(), EventLogEntryType.Error);
            }

            // 내장객 조회 폴링
            try
            {
                WebClient client = new WebClient();
                string reply = client.DownloadString(Url + $"/api/GreenIT/MemberFeeLockerSyncBatch/{GoyangFieldId}|{now.ToString("yyyyMMdd")}");
                log.WriteEntry(reply);
            }
            catch (Exception ex)
            {
                log.WriteEntry("Server Returns Error : " + ex.ToString(), EventLogEntryType.Error);
            }
            poolingReservationTimer.Start();
        }

        protected override void OnStart(string[] args)
        {
            poolingReservationTimer.Start();
            paymentTimer.Start();
            log.WriteEntry("SMS Pooling Service Started");
        }

        protected override void OnStop()
        {
            paymentTimer.Stop();
            poolingReservationTimer.Stop();
            log.WriteEntry("SMS Pooling Service Stopped");
        }

    }
}
