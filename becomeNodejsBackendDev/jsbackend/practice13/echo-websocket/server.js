// 메아리 앱 웹소켓 서버

const WebSocket = require("ws"); //ws 패키지 임포트
// server instance init
const server = new WebSocket.Server({
    port:3000
});

let idx = 0;
let conCnt = 0;

let messageQu = [];
server.on('connection', ws => {
    ws.send('[서버 접속 완료!]');       // 클라 접속 시 메시지 보냄
    for (let i = 0; i < messageQu.length; i++){
        ws.send(messageQu[i]);
    }
    
    conCnt ++;
    setInterval(() => {
        idx ++;
        ws.send(`${idx} 주기적인 신호보내기 연결 수 : ${conCnt}`);
    }, 2000);

    
    // 메시지 수신 이벤트 핸들러
    ws.on('message', message => {
        messageQu.push(message);
        ws.send(`서버로부터 응답: ${message}`);
    });

    ws.on('close', () => {
        console.log(" 클랑언트 접속 해제");
        conCnt --;
    })
})