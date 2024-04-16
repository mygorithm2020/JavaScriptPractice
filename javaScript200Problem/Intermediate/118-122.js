// 정규 표현식 regex : / / 사이에 찾고자하는 형태를 넣는다


// search
const str = "To lose your path is the way to find that path";

const regex1 = /path/;

console.log(str.search(regex1));

console.log("------------------");
// match 
console.log(str.match(regex1));


console.log("------------------");
// test (RegEx 객체 사용)
const numRegExp = /[0-9]+/;     // [] : 선택 패턴
const phoneRegExp = /\d{3}-\d{3,4}-\d{4}$/;         // {} : 갯수를 나타냄
// 소괄호는 그룹입니다. 표현식을 괄호 그룹으로 묶으면 원하는 부분끼리만 표현식이 적용
const emailRegExp = /^([-_.]?[0-9a-zA-Z]{6,13})+\@([0-9a-z]+)\.([a-z]{2,3})$/i;

console.log(numRegExp.test(1234));
console.log(numRegExp.test("1234"));
console.log(phoneRegExp.test("010-1234-4232"));
console.log(phoneRegExp.test("02-1233-4322"));
console.log(emailRegExp.test("test123@gmail.com"));
console.log(emailRegExp.test("took4321@sdsds"));


console.log("------------------");
// exec : 정규표현식과 일치하는 문자열 배열 반환
const sttrr = "Java is not in JavaScript";

const result1 = /java/ig.exec(sttrr);
console.log(result1);

console.log("------------------");
// replace : 치환
const dateStr = new Date().toJSON();
console.log(dateStr);
console.log(dateStr.replace("-", ":"));
console.log(dateStr.replace(/-/g, ":"));  //바꿀 문자열에 정규식 넣기

