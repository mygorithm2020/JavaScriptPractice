// 스코프 이해하기

var a = 10;

function pringt(){
    var b = 20;
    if (true){
        var c = 30;
    }
    console.log(c);
}

pringt()
console.log(c);
console.log(b);