import React, { useContext } from "react";
import { MyAppContext } from "./App";

export function GrandChild() {
  const retrunedVal = useContext(MyAppContext);

  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "#FFD9B7",
      }}
    >
      <h1>Grand Child</h1>
      <button onClick={retrunedVal}>Call my Func</button>
    </div>
  );
}
