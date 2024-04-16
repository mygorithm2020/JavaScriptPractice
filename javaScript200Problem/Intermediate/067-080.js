// trim
console.log(" sdsd q ".trim());

console.log("------------------");
// slice : 문자열 자르기
const sentenct = "The sun will shine on us again";
console.log(sentenct.slice(1, 4));
console.log(sentenct.slice(1, -2));
console.log(sentenct.slice(60));  // 값없음
console.log(sentenct.slice(60, 40)); //비정상

console.log("------------------");
//substring 문자열 자르기
console.log(sentenct.substring(1, 4));
console.log(sentenct.substring(1, -4)); // 음수 비 정상
console.log(sentenct.substring(8, 2)); // 앞 뒤 값을 바꿔서 자동 실행

// substr 문자열 자르기

console.log("------------------");

// length
console.log(sentenct.length);
console.log("------------------");

//toString
const num = 5;
const boolll = true;
const str = "asdsad";
const arr = [1, 2, 3];
const obj = {a : 15};

console.log(num.toString());
console.log(boolll.toString());
console.log(str.toString());
console.log(arr.toString());
console.log(obj.toString());

console.log("------------------");
// concat : 문자열 합치기
const sentenct2 = "sdsdsdsds";
console.log(sentenct.concat(sentenct2));
console.log(sentenct + sentenct2);      // 성능상 이게 더 좋음

console.log("------------------");
// charAt : 특정 위치의 문자 반환
console.log(sentenct.charAt(5));

console.log("------------------");
// indexOf : 없으면 -1
console.log(sentenct.indexOf("s"));
console.log(sentenct.indexOf("sun"));

console.log("------------------");
// ilastIndexOf : 없으면 -1
console.log(sentenct.lastIndexOf("s"));

console.log("------------------");
// includes : 특정 문자열 포함 여부 확인
console.log(sentenct.includes("sun"));

console.log("------------------");
// toLowerCase, toUpperCase
console.log(sentenct.toLowerCase());
console.log(sentenct.toUpperCase());

console.log("------------------");
// from : 문자열을 배열로 분할
www = Array.from(sentenct);
console.log(www);

www = Array.from(sentenct, one => one.toUpperCase());
console.log(www);

console.log("------------------");
// split : 특정 구분자에 의해 배열로 나누기
console.log(sentenct.split(""));