
///////////////////////// v2
const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

function onLoginSubmit(tomato) {        
    tomato.preventDefault();
    console.log(tomato);        
    loginForm.classList.add(HIDDEN_CLASSNAME);            
    const userName = loginInput.value;
    console.log(userName);
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreetings();    
}


const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings();    
}

function handleLinkClick(event){
    event.preventDefault();
    console.log(event);    
    
}

link.addEventListener("click", handleLinkClick);



///////////////////////// v1

// // element안에서 검색 documenmt가 아니라
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// // 이렇게도 가능
// // const loginInput = document.querySelector("#login-form input");
// // const loginButton = document.querySelector("#login-form button");

// function onLoginBtnClick(){
//     // console.dir(loginInput.value);   
//     const userName = loginInput.value;  
//     console.log(userName);
//     // if (userName ===""){
//     //     alert("plese write something");
//     // } else if (userName.length > 10){
//     //     alert("too long");
//     // }
// }

// loginButton.addEventListener("click", onLoginBtnClick);