let timerBtn = document.getElementById("timer-btn");
let stopWatchBtn = document.getElementById("stopWatch-btn");

let timeSet = document.getElementById("time-set");
let dynamicTime = document.getElementById("dynamic-time");

let startBtn = document.getElementById("start-btn");
let resetBtn = document.getElementById("reset-btn");

timerBtn.addEventListener("click", function(){
    alert("timer");
});

stopWatchBtn.addEventListener("click", function(){
    alert("stop");
});

let q = 3600;
timeSet.addEventListener("input", function(e){    
    q = parseInt(this.value);
    let hour = parseInt(q/3600);
    let min = parseInt((q%3600)/60);
    let sec = parseInt(q%60);
    dynamicTime.innerHTML = `${hour}h ${min}m ${sec}s`;
})

let timer;
startBtn.addEventListener("click", function(){        
    if (startBtn.value == "시작"){        
        startBtn.value = "정지";
        timer = setInterval(() => {
            console.log(q);
            q--;            
            let hour = parseInt(q/3600);
            let min = parseInt((q%3600)/60);
            let sec = parseInt(q%60);
            dynamicTime.innerHTML = `${hour}h ${min}m ${sec}s`;
            if (q <= 0){
                clearInterval(timer);
                alert("타이머 종료");
                return;
            }

        }, 1000);        
    } else{
        startBtn.value = "시작";
        clearInterval(timer);
    }
    
})