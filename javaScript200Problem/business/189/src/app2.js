// 189, 모듈화 186부터 ~188 까지 진행한 내용이 기존에는 HTML에서 일일이 자바스크립트 파일을 추가해서 구현했다면
// 여기서는 각 파일을 모듈화해서 연결

import { TodoManagerWithStorage } from "./TodoManagerWithStorage.js";

export class TodoApp{
    constructor(){
        this.todoManager = new TodoManagerWithStorage();
        this.todoContainerEl = document.querySelector(".todo-container");
        this.titleEl = document.querySelector(".title h2");
        this.plusBtnEl = document.querySelector(".add-todo button");
        this.renderTodos();
        this.bindEvents();
    }

    renderTodos(){
        this.todoContainerEl.innerHTML = "";
        this.todoManager.getList().forEach((todo, i) => {
            const todoEl = this.createTodoEl(todo, i);
            this.todoContainerEl.appendChild(todoEl);
        });
        this.renderTitle();
    }

    createTodoEl(todo, id) {
        const todoEl = document.createElement("div");
        todoEl.id = "todo-" + id;
        todoEl.className = "todo";
        todoEl.innerHTML = 
        `<input type="checkbox" ${todo.done ? "checked" : ""}>
        <label>${todo.contents}</label>`;
        return todoEl;
    }
    
    renderTitle() {
        const now = new Date();
        const month = now.getMonth();
        const date = now.getDate();
        if (this.titleEl) {
            this.titleEl.innerHTML = 
            `${month}월 ${date}일 <span class="left-count">
            (${this.todoManager.leftTodoCount}개)</span>`;
        }
    }

    bindEvents() {
        this.plusBtnEl.addEventListener("click", evt => {
            var textEl = document.querySelector('.add-todo input[type="text"]');
            console.log(textEl.value);
            if (textEl.value === ""){
                return
            }
            this.todoManager.addTodo(textEl.value);
            textEl.value = "";
            this.renderTodos();
        });
        this.todoContainerEl.addEventListener("click", evt => {
            if (evt.target.nodeName === "INPUT" && evt.target.parentElement.className === "todo") {
                const clickedEl = evt.target.parentElement,
                index = clickedEl.id.replace("todo-", "");
                this.todoManager.getList()[index].toggle();
                this.renderTitle();
            }
        })
    }
}