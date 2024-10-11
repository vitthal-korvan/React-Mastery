import { GrandChild } from "./GrandChild";

export function Child() {
  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "#7EAA92",
      }}
    >
      <h1>Child</h1>
      <GrandChild />
    </div>
  );
}
