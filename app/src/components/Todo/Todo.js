import React from "react";
import "./Todo.css";

export default function Todo({ todo, remove }) {
  // Each Todo
  return (
    <li className="todo-list__item" onClick={() => remove(todo.id)}>
      {todo.text}
    </li>
  );
}
