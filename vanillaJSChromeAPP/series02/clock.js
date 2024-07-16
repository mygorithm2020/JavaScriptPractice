const clock = document.querySelector("h2#clock");




//interval
function sayHello() {
    const date = new Date();
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");    
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

sayHello();
setInterval(sayHello, 1000);


//timeout