// 현재 시간을 원하는 포맷으로 출력

// getFullYear / getMonth / getDate
const date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());    //0부터 시작함
console.log(date.getDate());


console.log("------------------");
// UTC 기준 날짜 출력
const dateUTC = Date.UTC(
    date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours()
);
console.log(dateUTC);
console.log(new Date(dateUTC));
console.log(date.getUTCFullYear());
console.log(date.getUTCMonth());
console.log(date.getUTCDate());

console.log("------------------");
// 두 날짜 사이의 경과 시간 계산
setTimeout(() => {
    const date02 = new Date();
    console.log(date02 - date); // 밀리초 단위
}, 3000);
