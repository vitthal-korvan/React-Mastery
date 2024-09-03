import React, { useRef } from "react";

function DOMUseRef() {
  const h1ref = useRef();
  const handleClick = () => {
    const h1Element = h1ref.current;
    console.log(h1Element);
    h1Element.textContent = "Hey! Vitthal";
    h1Element.style.backgroundColor = "blue";
    h1Element.style.color = "white";
  };
  return (
    <>
      <h1 ref={h1ref}>Hello! World</h1>
      <button onClick={handleClick}> Change Content</button>
    </>
  );
}
export default DOMUseRef;
