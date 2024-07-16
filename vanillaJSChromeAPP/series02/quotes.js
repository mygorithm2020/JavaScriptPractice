const quotes = [
    {
        author : "키케로",
        quote : "삶이 있는 한 희망은 있다",
    },
    {
        author : "로망로랑",
        quote : "산다는것 그것은 치열한 전투이다",
    },
    {
        author : "사무엘존슨",
        quote : "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다. ",
    },
    {
        author : "파울로 코엘료",
        quote : "언제나 현재에 집중할수 있다면 행복할것이다",
    },
    {
        author : "찰리 채플린",
        quote : "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해",
    },
    {
        author : "엘버트 허버드",
        quote : "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다 ",
    },
    {
        author : "켄러",
        quote : "신은 용기있는자를 결코 버리지 않는다 ",
    }

]

// Math.round(Math.random() * 10);
// Math.ceil(Math.random() * 10);
// console.log(Math.floor(Math.random() * quotes.length));

console.log(quotes);
console.log(quotes[Math.floor(Math.random() * quotes.length)]);

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;

