/*
문자열
1. 슬라이스
2. 문자열로 변환 숫자로 변환
3. 길이 측정
4. split
5. join
*/
let origin = "Hello world";
console.log(origin);

// console.log(origin.slice(3, 8));

// const str = 'The quick brown fox jumps over the lazy dog.';

// console.log(str.slice(31));
// // Expected output: "the lazy dog."

// console.log(str.slice(4, 19));
// // Expected output: "quick brown fox"

// console.log(str.slice(-4));
// // Expected output: "dog."

// console.log(str.slice(-9, -5));
// // Expected output: "lazy"

// let num = 10;
// console.log(num, num.toString());
// let strNum = "20";
// console.log(strNum, parseInt(strNum, 10));

// console.log(origin.length);

// let ss = origin.split(" ")
// console.log(ss);
// for (let i = 0; i< ss.length; i++){
//     console.log(ss[i]);
// }
// console.log(ss.join());   //comma가 default
// console.log(ss.join(""));
// console.log(ss.join(" "));
// console.log(ss.join("-"));

// console.log("s".charCodeAt());
// console.log(String.fromCharCode(115));

// console.log(origin.toLowerCase());


/* 
배열
1. 초기화
2. 길이
3. 순회
4. 추가
5. 삭제
6. 변경
7. 정렬
8. 아스키코드
*/

const arr = [1, 2, 3, 5, 6, 8, 1];
console.log(arr);
// console.log(arr.length);
// for (let idx = 0; idx < arr.length; idx++){
//     console.log(idx, arr[idx]);
// }

// for (let one in arr){
//     console.log(one, arr[one]);
// }

// for (let two of arr){
//     console.log(two);
// }

// arr.push("ssss");
// console.log(arr);
// arr.unshift("qqq");
// console.log(arr);

// let sh = arr.shift();
// console.log(sh, arr);
// let po = arr.pop();
// console.log(po, arr);
// let spl = arr.splice(2, 4);
// console.log(spl, arr);

// const filArr = arr.filter((val, idx, arr)=>{
//     return val > 3;
// });
// console.log(filArr);

// arr[2] = "sdsdsd";
// arr[arr.length] = 99;
// console.log(arr);


// arr.sort()
// console.log(arr);

// // 숫자를 문자열로 변환 후 정렬함 기본이.. 따라서 숫자 정렬은 따로 설정이 필요
// const arr2 = [100, 20, 3, 42, 105, 12];
// console.log(arr2);
// arr2.sort();
// console.log(arr2);
// arr2.sort((a, b) => {
//     return a-b;

// } );
// console.log(arr2);


// for문

const obj = {
    name : '이름',
    age : '나이'
}

// for(const key in obj){
//     console.log(key); // key값 출력
//     console.log(obj.name, obj.age); // value 값 출력

//     console.log(`key 값 : ${key}`); // 1. key값 : 이름 // 2. key값 :age
//     console.log(`value 값 : ${obj[key]}`); // 1. value 값 : 이름 // 2. value값 : 나이
// }

// const array = ['1번', '2번', '3번'];

// for(const element of array) {
//   console.log(element); // 배열[0] ~ 끝까지 순차적 출력
// }

// array.forEach((ele)=>{
//     console.log(ele);
// })

// while문
let isis = true;
// while(isis){
//     console.log("qqq");
//     if (isis){
//         break;
//     }
// }


// if문

let qqq = 10;
// if (qqq == 10){
//     console.log("숫자");
// }

// if (qqq === "10"){
//     console.log("10이다");
// }else if (qqq == "10"){
//     console.log("숫자 10이다");
// }else{
//     console.log("????");
// }

// 숫자
let q = 10;
let ww = 10.5;
// console.log(typeof q);
// console.log(typeof ww);

// // 실수 => 정수 , 올림, 반올림, 내림
// console.log(parseInt(ww));


// console.log(Math.ceil(ww));
// console.log(Math.round(ww));
// console.log(Math.floor(ww));


// // 진수 변환
// console.log(q.toString(2));

// map // 해시테이블(딕셔너리)
let maaap = new Map();
maaap.set("ss", 11);
maaap.set("ww", 122);
console.log(maaap);
maaap.set("ss", 2099);
console.log(maaap);
maaap.set("ss", null);
console.log(maaap);
console.log(maaap.get("ww"));
console.log(maaap.size);
maaap.delete("ss");
console.log(maaap);
if (maaap.has("ww")){
    console.log("sdsdsd");
}

// 집합
let seeeet = new Set();
seeeet.add(10);
seeeet.add(5);
seeeet.add("Ss");
console.log(seeeet);
seeeet.delete("Ss");
seeeet.delete("sssss");
console.log(seeeet);
if (seeeet.has(10)){
    console.log("yessss!");
    console.log(seeeet.size);
}
console.log(seeeet[0]);

// 큐, 스택
// 우선순위 큐
// 힙
// 입, 출력
