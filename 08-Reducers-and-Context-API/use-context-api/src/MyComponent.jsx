import { Child } from "./Child";

export function MyComponent() {
  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "#9ED2BE",
      }}
    >
      <h1>My Component</h1>
      <Child  />
    </div>
  );
}
