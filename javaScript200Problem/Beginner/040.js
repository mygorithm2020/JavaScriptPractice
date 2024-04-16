// 함수 호이스팅 : 함수 선언 전에 호출하기
hello();
function hello(){
    console.log("hello");
}

hello2(); // 에러
var hello2 = function(){
    console.log("hello2");
}