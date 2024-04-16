// 생성자 함수 : 객체를 생성하는 생성자 함수를 이해
// new 키워드를 통해 함수를 호출하게 되면 return 문 없이도 새로운 객체 반환

// 생성자함수는 대문자로 시작하는 관례를 가짐
function Teacher(name, age, subject){
    this.name = name;
    this.age = age;
    this.subject = subject;
    this.teach = function (student) {
        console.log(`${this.name}이 ${student}를 가르칩니다.`);
    }
};

const jay = new Teacher("jay", 30, "JS");
console.log(jay);
jay.teach("sdsad");

console.log(jay.constructor);
console.log(jay instanceof Teacher);

const jay2 = Teacher("jay", 25, 'qqq');
console.log(jay2);
console.log(age);
jay2.teach("sss");