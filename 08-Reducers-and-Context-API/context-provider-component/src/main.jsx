import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import { createContext } from "react";

export const AuthContext = createContext();

createRoot(document.getElementById("root")).render(
  <AuthContext.Provider value={{
    username:"Vitthal",
    email:"korvanvitthal@gmail.com"
  }}>
    <App />
  </AuthContext.Provider>
);
