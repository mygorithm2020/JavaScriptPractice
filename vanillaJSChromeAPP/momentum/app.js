const titlee = document.querySelector(".hello h1");

console.dir(titlee);

titlee.innerHTML = "hello";

function handleTitleClick(aaaa){
    const clickedClass = "active";

    const q = titlee.classList.toggle(clickedClass);
    console.log(q);

    // // 클래스에 포함되어 있는지 확인
    // if (titlee.classList.contains(clickedClass)){
    //     titlee.classList.remove(clickedClass);
    //     // titlee.className = "";
    // }else{
    //     titlee.classList.add(clickedClass);
    //     // titlee.className = clickedClass;
    // }


    // const currentColor = titlee.style.color;
    // let newColor;
    // if (currentColor === "blue"){
    //     newColor = "tomato";
    // }else{
    //     newColor = "blue";
    // }
    // titlee.style.color = newColor;
    // console.log(titlee.style.color);
}
titlee.addEventListener("click", handleTitleClick);

// function handleMouseEnter() {
//     titlee.innerText = "Mouse is here";
// }

// titlee.addEventListener("mouseenter", handleMouseEnter);

// function handleMouseLeave(){
//     titlee.innerText = "Mouse is gone";

// }

// titlee.addEventListener("mouseleave", handleMouseLeave);

// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }

// window.addEventListener("resize", handleWindowResize);

// function handleWindowCopy(){
//     alert("copier");
// }

// window.addEventListener("copy", handleWindowCopy);

// function handleWindowOffline(){
//     alert("SOS no WIFI");
// }

// function handleWindowOnline(){
//     alert("All good");
// }

// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);

// const title = document.getElementsByTagName("h1");

// console.log(title[0]);

// const hellos = document.getElementsByClassName("hello");

// console.log(hellos);

// const title = document.getElementById("title");

// console.dir(title);

// title.innerHTML = "Got you!";

// console.log(title.id);
// console.log(title.className);

// function sayHello(name){
//     console.log(`Hello my name is ${name}`);
// }

// sayHello();


// function plus(a, b){
//     console.log(a + b);
// }

// plus(5, 10);

// const player = {
//     name:"noci",
//     sayHello : function(other){
//         console.log("hello!  " + other);
//     }
// }

// player.sayHello("sdsd");

// const calculator = {
//     add : function(a, b){
//         return a + b;
//     },
//     minus : function(a, b) {
//         return a - b;
//     },
//     multiple : function(a, b){
//         return a * b;
//     },
//     divide : function(a, b){
//         return a / b;
//     },
//     square : function(a, b){
//         return a**b;
//     }
// };

// calculator.add(2, 3);
// calculator.minus(2, 3);
// calculator.multiple(2, 3);
// calculator.divide(2, 3);
// calculator.square(2, 3);

// const age = 96;
// function calculateKrAge(ageOfForeigner) {
//     return ageOfForeigner + 2;
// }

// const krAge = calculateKrAge(age);

// console.log(krAge);


// let age2 = parseInt(prompt("How old are you?"));

// console.log(age2, isNaN(age2));

// if (isNaN(age2) || age2 < 0){
//     age2 = parseInt(prompt("How old are you?"));
// } else if (age2 < 18){
//     console.log("you are too young!");    
// } else if (age2 === 100) {
//     console.log("wow you are wise");
// } else if (age2 > 50) {
//     console.log("you would be dangerous");    
// } else {
//     console.log("you can drink");    
// }