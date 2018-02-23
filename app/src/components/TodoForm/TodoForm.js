import React from "react";
import "./TodoForm.css";
import AddButton from "../AddButton/AddButton";

export default function TodoForm({ addTodo, todoValue, onChange }) {
  // Input tracker
  let input;

  return (
    <div className="todo-form__wrapper">
      <div className="todo-form__wrapper-flex">
        <input
          className="todo-form__input"
          value={todoValue}
          onChange={onChange}
        />

        <AddButton
          disabled={!todoValue}
          onClick={() => {
            if (todoValue) {
              addTodo(todoValue);
            }
          }}
        >
          Add something!
        </AddButton>
      </div>
    </div>
  );
}
