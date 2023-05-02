import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MyButton from "./components/myButton";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <span>My Buttons</span>
      <MyButton></MyButton>
      <MyButton></MyButton>
    </div>
  </React.StrictMode>
);
