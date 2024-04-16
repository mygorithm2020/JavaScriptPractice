// 객체지향_프로토타입(원형)

const studentProto = {
    gainExp: function() {
        this.exp++;
    }
};

const harin = {
    name : "harin",
    age: 10,
    exp : 0,
    __proto__ : studentProto
};

harin.gainExp();
harin.gainExp();
console.log(harin);