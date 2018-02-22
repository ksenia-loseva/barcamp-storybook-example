import React from "react";
import "./Header.css";

export default function Header(props) {
  const { className, count, value } = props;
  return (
    <div className="header">
      <h1 className={className} style={{ backgroundColor: value }}>
        You have {count} things to do.
      </h1>
    </div>
  );
}
