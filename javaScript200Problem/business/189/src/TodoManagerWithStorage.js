// 189, 모듈화

import { TodoManager } from "./models.js";

export class TodoManagerWithStorage extends TodoManager {
    // static STORAGE_KEY = "TODO-APP";
    static get STORAGE_KEY() {
        return "TODO-APP";
    }

    constructor() {
        const todoJson = localStorage.getItem(TodoManagerWithStorage.STORAGE_KEY);
        const todos = (todoJson) ? JSON.parse(todoJson) : [];
        super(todos)
    }

    addTodo(contents, done = false){
        const newTodo = super.addTodo(contents, done);
        const original = newTodo.toggle;
        newTodo.toggle = () => {
            original.apply(newTodo);
            this.saveToLocalStorage();
        }
        this.saveToLocalStorage();
        return newTodo;
    }

    saveToLocalStorage(){
        const todoJSON = JSON.stringify(this._todos);
        localStorage.setItem(
            TodoManagerWithStorage.STORAGE_KEY, todoJSON
        );
    }
}