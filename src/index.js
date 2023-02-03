import React from "react";
import ReactDOM from "react-dom";

const element = React.createElement(
  "div",

  { id: "app", className: "container" },
  "hello"
);

const root = document.getElementById("root");

ReactDOM.render(element, root);
