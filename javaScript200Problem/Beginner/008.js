var x = 5;
var y = 'five';
var isTrue = true;
var empty = null;
var nothing;
var sym = Symbol('me'); //???

var item = {
    price : 5000,
    count : 10
}; // 객체(object)

var fruits = ['apple', "orange", "kiwi"]; // 배열(array)
var addFruit = function(fruit){
    fruits.push(fruit)
};
addFruit("watermelon");
console.log(fruits);
