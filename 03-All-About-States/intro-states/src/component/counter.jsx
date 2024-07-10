import { useState } from "react";
import "./counter.css";
function Counter() {
  let [count, setCount] = useState(0);
  return (
    <>
      <h1 className="count">{count}</h1>
      <button
        onClick={() => {
            setCount((prev)=>prev+1)
        }}
        className="btn"
      >
        Increase
      </button>
      <button
        onClick={() => {
           setCount((prev) => prev - 1);
        }}
        className="btn"
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
        className="btn"
      >
        Reset
      </button>
    </>
  );
}

export default Counter;
