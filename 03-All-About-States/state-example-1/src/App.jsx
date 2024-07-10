import { useState } from "react";
import "./App.css";
import Users from "./Users";

function App() {
  const [users, setUser] = useState([
    { id: 1, fname: "vitthal", lname: "korvan", age: 24 },
    { id: 2, fname: "Mahesh", lname: "boga", age: 24 },
    { id: 3, fname: "jagannath", lname: "patta", age: 24 },
    { id: 4, fname: "arpit", lname: "gupta", age: 24 }
  ]);
  return <>
  <Users users={users}/>
  </>;
}

export default App;
