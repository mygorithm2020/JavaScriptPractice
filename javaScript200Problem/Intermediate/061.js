// 자료형 확인하기 typeof, instanceof

const str = "JavaScript";
const strObj = new String("JavaScript");
const num = 200;
const numObj = new Number(200);
const bool = true;
const boolObj = new Boolean(true);
const func = function(){};
const arr = [10, 200, 4000];
const obj = {a1: "test"};
const empty = null;
const notCalled = undefined;

console.log(typeof str === "string");
console.log(typeof strObj === "object");
console.log(typeof num === "number");
console.log(typeof numObj === "object");
console.log(typeof bool === "boolean");
console.log(typeof boolObj === "object");
console.log(typeof func === "function");
console.log(typeof arr === "object");
console.log(typeof obj === "object");
console.log(typeof empty === "object");
console.log(typeof notCalled === "undefined");

// typeof 는 원시자료형과 객체형을 구분하기 위해 사용하면 좋음

console.log("=======================================");


// 객체를 확인하고 싶다면 instanceof
console.log(str instanceof String);
console.log(strObj instanceof String);
console.log(num instanceof Number);
console.log(numObj instanceof Number);
console.log(bool instanceof Boolean);
console.log(boolObj instanceof Boolean);
console.log(func instanceof Function);
console.log(arr instanceof Array);
console.log(obj instanceof Object);
console.log(empty instanceof Object);
console.log(notCalled instanceof undefined);