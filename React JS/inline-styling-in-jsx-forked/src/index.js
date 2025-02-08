import React from "react";
import ReactDOM from "react-dom/client";
import "/public/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const customStyle = {
  color: "red",
  fontSize: "100px",
  border: "1px solid black",
};

const secondStyle = {
  width: "400px",
  color: "blue",
};

root.render(
  <div>
    <h1 style={customStyle}>Hello World!</h1>
    <button style={secondStyle}>Hello</button>
  </div>
);
