import React from "react";
import "./Footer.css";

export default function Footer(props) {
  const stamp = new Date(props.value);
  const stampString = stamp.toString();

  return (
    <div className="footer__wrapper">
      <h1>
        {stampString === "Invalid Date"
          ? "This is just a footer."
          : stampString}
      </h1>
    </div>
  );
}
