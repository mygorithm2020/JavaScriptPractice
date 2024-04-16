// 반복 가능한 객체 The Iterable
// 반복자 The Iterator

// Array, String, Map, Set

const str = "hello";

for (const item of str) {
    console.log(item);
}


const product = [
    {name: "가방"},
    {name: "노트북"},
];

for (const item of product){
    console.log(item);
}

const map = new Map();

map.set("one", 1);
map.set("two", 2);

console.log(map.get("one"));
console.log(map.has("one"));
map.delete("one");

console.log(map.has("one"));
console.log(map.get("one"));

map.set(3, "three");
map.set([1, 2, 3], "Three ele");
map.set(function() {}, "fun ele");

console.log(map.size)

console.log("------------next---------------");

const keys = map.keys();
const values = map.values();
const entries = map.entries();

console.log(keys.next().value);
console.log(values.next().value);
console.log(entries.next().value);

console.log("------------for-of, foreach---------------");
for (let [key, value] of map.entries()){
    console.log(key, value);
}

for (let [key, value] of map){
    console.log(key, value);
}

map.forEach((value, key) => {
    console.log(key, value);
});
console.log("--------------map2-------------");
const map2 = new Map();

for (let num of [1, 2, 3, 4, 5]){
    map2.set((value) => value * 2, num);
}
console.log(map2);

console.log("--------------set-------------");
const s = new Set();

s.add("one");
s.add("two");
s.add("three");

console.log(s.has("one"));
s.delete("one");
console.log(s.has("one"));

console.log("--------------size-------------");
console.log(s.size);
s.clear();
console.log(s.size);

console.log("---------------------------");
const arr = ["one", "t", "three", "four", "three", ]
const arrSet = new Set(arr);
console.log([...arrSet]);
console.log(arrSet);

console.log("---------------------------");
console.log(arrSet.keys());
console.log(arrSet.values());
console.log(arrSet.entries());