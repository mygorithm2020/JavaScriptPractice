// 나머지 매개변수 
function sum(...args){
    var total = 0;
    for (var i = 0; i < args.length; i++){
        total += args[i]
    }
    return total;
}

console.log(sum(1, 2, 3));