import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

const element = <App />;
console.log(element);
const root = createRoot(document.getElementById("root"));
root.render(element);
