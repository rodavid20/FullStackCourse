import React from "react";

const Counter = ({ count, incrementCount }) => {
  const formatCount = () => {
    return count === 0 ? "Zero" : "Clicked" + count + "times";
  };

  const btnClassNames = "btn btn-primary";
  const getBadgeClassName = () => {
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "warning" : "secondary";
    return classes;
  };

  return (
    <>
      <span className={getBadgeClassName()}>{formatCount()}</span>
      <button className={btnClassNames} onClick={incrementCount}>
        Click Here
      </button>
    </>
  );
};

export default Counter;
