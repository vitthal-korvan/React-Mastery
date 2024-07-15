import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState(""); //default value is empty string
  const [password, setPassword] = useState("");

  // function handleUsername(e){
  //   console.log(e.target.value);
  //   setUsername(e.target.value)
  // }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Hey! ", username);
  }
  return (
    <>
      <h2>Form Basics</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">User Name </label>
        {/* we use htmlFor for label we can't use for because it is reserved keyword in JS */}
        {/* <input type="text" id='username' value={username} onChange={handleUsername}/> */}
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <p>UserName: {username}</p>
    </>
  );
}

export default App;
