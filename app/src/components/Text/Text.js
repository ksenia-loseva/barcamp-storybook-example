import React from "react";
import "./Text.css";

export default function Text(props) {
  return <div className="label">{props.content || "Yeay"}</div>;
}
