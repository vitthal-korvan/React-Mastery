import React, { useEffect, useState } from "react";

export function ExampleUseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleClick = () => {
      setCount(count + 1);
    };
    const button = document.getElementById("button");
    button.addEventListener("click", handleClick);
    return () => button.removeEventListener("click", handleClick);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button id="button">Click me!</button>
    </div>
  );

}
