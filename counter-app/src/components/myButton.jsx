import React from "react";

let count = 0;

function MyButton() {
  function handleClick() {
    count = count + 1;
    console.log("clicked", count);
  }
  return (
    <div>
      <span>Count {count}</span>
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
}

export default MyButton;
