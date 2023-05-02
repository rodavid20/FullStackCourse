import React from "react";
import { createRoot } from "react-dom/client";

const element = <h1 class="header">Hello World</h1>;

console.log(element);
const root = createRoot(document.getElementById("root"));

root.render(element);
