import React, { useState } from "react";
import Counter from "./components/counter";

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
    console.log("clicked", count);
  };

  return (
    <>
      <Counter count={count} incrementCount={incrementCount} />
      <Counter count={count} incrementCount={incrementCount} />
    </>
  );
};

export default App;
