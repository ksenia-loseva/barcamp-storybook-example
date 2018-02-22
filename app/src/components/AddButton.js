import React from "react";
import "./AddButton.css";

export default function AddButton(props) {
  return (
    <button
      className="add-button"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.content || "Add 👍"}
    </button>
  );
}
