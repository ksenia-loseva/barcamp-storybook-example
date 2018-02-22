import React from "react";
import "./TodoList.css";
import Todo from "./Todo";

export default function TodoList({ todos, remove }) {
    // Map through the todos
    const todoNode = todos.map((todo) => {
        return (<Todo todo={todo} key={todo.id} remove={remove}/>)
    });
    return (<ul className="todo-list">{todoNode}</ul>);
}