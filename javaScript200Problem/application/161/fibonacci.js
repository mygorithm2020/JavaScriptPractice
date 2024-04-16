function fibonacci(num) {
    if (num <= 1){
        return 1;
    }
    console.log(num);
    return fibonacci(num - 1) + fibonacci(num - 2);
}

onmessage = function(e) {
    const num = e.data.num;
    console.log("메인에서 전달받은 메시지", e.data);
    if (num == null || num === ""){
        throw new Error("숫자를 전달하지 않았습니다");
    }
    const result = fibonacci(num);
    postMessage(result);
}