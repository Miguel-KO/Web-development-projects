import React from "react";
import ReactDOM from "react-dom/client";
import "/public/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  </div>
);
