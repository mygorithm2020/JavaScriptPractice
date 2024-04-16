const result = document.getElementById("result");
let isCalculation = false;
if (window.Worker) {
    const fibonacciWorker = new Worker("fibonacci.js");
    document.getElementById("start-btn").addEventListener("click", e => {
        if (isCalculation) {
            alert("계산중입니다..");
            return;
        }
        const value = document.getElementById("number").value;
        fibonacciWorker.postMessage({num : value});
        result.innerHTML = "계산 중.......";
        isCalculation = true;
    });
    fibonacciWorker.onmessage = function (e) {
        result.innerHTML = e.data;
        isCalculation = false;
    }
    fibonacciWorker.onerror = function(error) {
        console.error("에러 발생", error.message);
        result.innerHTML = error.message;
        isCalculation = false;
    }
}