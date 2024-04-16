// !!!! JSON!!!!!

// stringify : JSON 을 JSON 문자열로

const testStringify = {
    Num : JSON.stringify(13.1),
    Str : JSON.stringify("kiss cut"),
    Bln : JSON.stringify(false),
    Arr : JSON.stringify([2001, 22200]),
};


const obj = {
    drama : "pet",
    season : 2017,
    casting : ["mine", "sdsds"],
    character : ["holy", "moly"],

};

console.log(typeof JSON.stringify(obj));
console.log(JSON.stringify(obj));
console.log(JSON.stringify(obj, ['drama', 'season']));
console.log(JSON.stringify(obj, null, 4));


console.log("------------------");
// parse : json 문자열을 JSON 으로
const json = '{"id" : 123, "product" : { "type" : "book",     "page" : 200,      "title" : "Javascript",      "tags" : ["JS", "Beginner"],      "date" : "2020-12-13"}}';

console.log(json);
console.log(JSON.parse(json));
console.log(JSON.parse("13.1"));
console.log(typeof JSON.parse("13.1"));
console.log(JSON.parse("false"));
console.log(JSON.parse("[200, 2132]"));
