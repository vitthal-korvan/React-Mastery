import { createContext } from "react";
import { MyComponent } from "./MyComponent";
export const MyAppContext = createContext();

function App() {

  function myFunc() {
    console.log("Hello from my function");
  }
  return (
    <MyAppContext.Provider value={myFunc}>
      <div
        style={{
          padding: "2rem",
          backgroundColor: "#C8E4B2",
          height: "100vh",
        }}
      >
        <h1>App</h1>
        <MyComponent  />
      </div>
    </MyAppContext.Provider>
  );
}

export default App;
