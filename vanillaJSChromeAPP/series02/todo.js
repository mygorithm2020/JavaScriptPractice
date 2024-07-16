const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos){
    const parsedTodos = JSON.parse(savedToDos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintToDo);
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    console.log(event.target.parentElement);
    li.remove();

    // const idx = toDos.indexOf()
    // if (idx > -1) toDos.splice(idx, 1)

    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function sexyFilter(item){
    if (item === 3){
        return false
    }
    return true;
}

function paintToDo(newTodo){

    const newTodoLi = document.createElement("li");
    newTodoLi.id = newTodo.id;
    const span = document.createElement("span");    
    span.innerText = newTodo.text;  
    const button = document.createElement("button");
    button.innerText = "❌";

    button.addEventListener("click", deleteToDo);

    newTodoLi.appendChild(span);
    newTodoLi.appendChild(button);    

    todoList.appendChild(newTodoLi);

}

function handleToDoSubmit(event) {
    event.preventDefault();
    console.log(todoInput.value);
    const newTodo = {
        id : Date.now(),
        text : todoInput.value,
    };
    todoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();

}





// 방금 발생한 이벤트를 첫 인자로 넘김
todoForm.addEventListener("submit", handleToDoSubmit);