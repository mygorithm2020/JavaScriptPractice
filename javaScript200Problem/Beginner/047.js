// 화살표 함수(기본함수와 차이점 이해하기)

const double = x => x + x;
console.log(double(2));


const add = (a, b) => a + b;
console.log(add(1, 2));

const printArg = () => {
    console.log(arguments);
};

printArg(1, 2, 3);

const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++){
        total += args[i];
    }
    return total;
};

console.log(sum(1, 2, 34));

setTimeout(() => {
    console.log("화살표 함수!");
}, 3000);