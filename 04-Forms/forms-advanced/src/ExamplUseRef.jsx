import React, { useRef } from "react";

function ExamplUseRef() {
  console.log("component Rendered");
  const username = useRef("Vitthal");
  const handleName = () => {
    username.current = "Korvan";
    console.log(username);
  };
  return (
    <>
      <h1>Hello, {username.current}</h1>
      <button onClick={handleName}>Change UserName</button>
    </>
  );
}

export default ExamplUseRef;
