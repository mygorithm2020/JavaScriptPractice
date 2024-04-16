// 객체 속성 기술자 이해하기 : 객체의 속성의 속성을 정의하거나 변경

let user = {
    name: "jaedo"
};

let descriptor = Object.getOwnPropertyDescriptor(user, "name");
console.log(descriptor);

let user2 = {};
Object.defineProperty(user2, "name", {
    value: "jaedo",             //name 속성의 값을 지정
    enumerable: true,           // 나열의 가능 여부를 정의
    configurable: true,         // 값의 변경 가능 여부 정의
    writable: false             // 속성 기술자를 변경할 수 있는 여부 정의
});

console.log(user2.name);
user2.name = "bbbb";
console.log(user2.name);

let user3 = {
    name: "jaedo",
    toString(){
        return this.name;
    }
};
Object.defineProperty(user3, "toString", {
    enumerable : false
});

for (let key in user3){
    console.log(key);
}

let user4 = {};
Object.defineProperty(user4, "name", {
    value: "jaedo",
    configurable: false
})

delete user4.name;
console.log(user4);

Object.defineProperty(user4, "name", {
    writable: true
})