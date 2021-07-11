import React from "react";
import ReactDOM from "react-dom";
const yourname = "David Raskovsky";
const currentyear = new Date().getFullYear();
ReactDOM.render(
  <div>
    <p>Created by {yourname}</p>
    <p>Copyright {currentyear}</p>
  </div>,
  document.getElementById("root")
);
//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
