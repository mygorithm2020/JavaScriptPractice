// 변환하기

//toString
const dec = 531;
console.log(dec.toString(2));       //2 진법
console.log(dec.toString(8));
console.log(dec.toString(16));

console.log(parseInt(dec.toString(2), 2));          // 10진법으로

console.log("------------------");
// Math.random : 무작위 실수
console.log(Math.random());


console.log("------------------");
// round : 반올림
const vvv = 543.929;
console.log(Math.round(vvv));

console.log("------------------");
// ceil : 올림 (절대값이 아니라 음수도 크기 자체로 비교 함)
console.log(Math.ceil(vvv));

console.log("------------------");
// floor : 내림
console.log(Math.floor(vvv));

console.log("------------------");