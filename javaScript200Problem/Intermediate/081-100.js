// 자바스크립트의 배열 자료형은 Linked List 자료구조 형태

// push
const festa = ["mang"];
festa.push("sadsdsd");
console.log(festa);

console.log("------------------");
//unshift
festa.unshift("qqqqq");
console.log(festa);

console.log("------------------");
// length
console.log(festa.length);

console.log("------------------");
// concat
const eee = ["bvbfd"];
console.log(festa.concat(eee));

console.log("------------------");
// join
console.log(festa.join("!"));

console.log("------------------");
// pop
console.log(festa.pop());

console.log("------------------");
//shift
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.shift());

console.log("------------------");
// slice
console.log(arr.slice(0, 2));

console.log("------------------");
// splice
console.log(arr);
arr.splice(2, 3);
console.log(arr);

console.log("------------------");
//indexOf

//forEach 
festa.forEach(e => {
    console.log(e);

});

console.log("------------------");
// sort
console.log(festa);
festa.push("asdsd");
festa.sort(function(a, b) {
    return a - b;
});
console.log(festa);

festa.sort(function(a, b) {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
});
console.log(festa);

console.log("------------------");
//reverse
festa.reverse();
console.log(festa);

console.log("------------------");
// some : 배열 요소가 특정 조건을 만족하는지 확인
console.log(arr.some(e => e > 5));

console.log("------------------");
// every : 모든 배열 요소들이 특정 조건만족 확인
console.log(arr.every(e => e > 3));

console.log("------------------");
// filter : 특정 기준으로 필터링
const filteredEven = arr.filter(a => {
    return a%2 == 0;
})
console.log(filteredEven);

console.log("------------------");
//find : 만족하는 첫 요소 반환
console.log(arr.find(a => a > 5));

console.log("------------------");
// map : 배열 요소 일괄 변경
const arr2 = arr.map(a => {
    a += 10
    return a;;
});
console.log(arr2);

console.log("------------------");
// 배열 내 값을 누적시키기
const res = arr2.reduce((sum, a) => {
    return sum + a;
});
console.log(res);

console.log("------------------");
// reduce


