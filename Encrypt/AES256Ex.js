//������(�ڹٽ�ũ��Ʈ ���ڵ� �ڵ� ����)
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

// ��ȣȭ, ��ȣȭ ����
/* var plain = "f542b0906d9549fda6b39dd145c212f5:Real Server20221208"; // ���� �Դϴ�.
var res = EncryptTest();

console.log(res);
console.log(DecryptTest(res)); */

// �� ��� ����
var resultValue = "LX5tvzpvEttHjiMo07ITzS/ma+i1cEenEf5FvxLK2JtwqlyybyWvY9EWfLhpY1WjF2lnVVzUABm8vSuC+upQAA=="; //API ��û���� ���� ��
var origin = DecryptTest(resultValue);
var originwords = origin.split(':') // ���� ���� : ���� ���еǾ�����
console.log(originwords[0]) // ���� ������
console.log(originwords[1]) // ���� Ű(����)