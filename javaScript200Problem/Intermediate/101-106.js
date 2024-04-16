// object

// keys:

const obj = {
    movie : "Summy",
    music : "Like Sugar",
    style : "Retro",
    price : Infinity
};

const arr = Object.keys(obj);
console.log(arr);

console.log("------------------");
// values
const arr2 = Object.values(obj);
console.log(arr2);

console.log("------------------");
// entries

const arr3 = Object.entries(obj);
console.log(arr3);

console.log("------------------");
//freeze : 객체 변경 불가능
Object.freeze(obj);
obj.movie = "sdsd";
console.log(obj);

console.log("------------------");
// seal : 객체에 속성 추가/삭제 불가능
const obj2 = {
    movie : "Summy",
    music : "Like Sugar",
    style : "Retro",
    price : Infinity
};
obj2.newPro = "addsome";
console.log(obj2);
Object.seal(obj2);
obj2.otherPro = "test";
console.log(obj2);

console.log("------------------");
// assign : 객체 인자들 병합, 첫 인자는 원본이 수정 됨
const obj3 = {
    age : 13
}
const newObj = Object.assign(obj3, obj2);
console.log(obj3);
console.log(newObj);