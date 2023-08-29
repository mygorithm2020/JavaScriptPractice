//웹서버(자바스크립트 디코드 코드 예시)
function EncryptTest(plain)
{
    alert("Hello World");
    var key = "GdrsptIkVbeUNHK/GDkE00w4rO226HfnRJpCodnfAFQ=";
    var IV = "yzS2d4+oFn1ilJ075u2yDA==";
    console.log(data);

    const cipher = CryptoJS.AES.encrypt(plain, CryptoJS.enc.Base64.parse(key), {
    iv: CryptoJS.enc.Base64.parse(IV),        
mode: CryptoJS.mode.CBC
        });
    return cipher.toString();
}

function DecryptTest(data)
{
    var key = "GdrsptIkVbeUNHK/GDkE00w4rO226HfnRJpCodnfAFQ=";
    var IV = "yzS2d4+oFn1ilJ075u2yDA==";

    const cipher = CryptoJS.AES.decrypt(data, CryptoJS.enc.Base64.parse(key), {
    iv: CryptoJS.enc.Base64.parse(IV),        
    mode: CryptoJS.mode.CBC
    });
    //return CryptoJS.enc.Utf8.stringify(cipher);// cipher.toString(CryptoJS.enc.Utf8);
    return cipher.toString(CryptoJS.enc.Utf8);
}

// 암호화, 복호화 예시
/* var plain = "f542b0906d9549fda6b39dd145c212f5:Real Server20221208"; // 예시 입니다.
var res = EncryptTest();

console.log(res);
console.log(DecryptTest(res)); */

// 실 사용 예시
var resultValue = "LX5tvzpvEttHjiMo07ITzS/ma+i1cEenEf5FvxLK2JtwqlyybyWvY9EWfLhpY1WjF2lnVVzUABm8vSuC+upQAA=="; //API 요청에서 받은 값
var origin = DecryptTest(resultValue);
var originwords = origin.split(':') // 원래 값은 : 으로 구분되어있음
console.log(originwords[0]) // 세션 데이터
console.log(originwords[1]) // 서버 키(변수)