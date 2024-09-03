import React, { useRef } from "react";

export function HandleInputUseRef() {
      const usernameRef = useRef()
      const passwordRef = useRef()

      const handleSubmit = (e)=>{
            e.preventDefault()
            const usernameInput =usernameRef.current
            const passwordInput = passwordRef.current
            console.log(usernameInput.value);
            console.log(passwordInput.value);
            
            
      }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">UserName</label>
      <br />
      <input type="text" id="username" ref={usernameRef}/>
      <br />
      <label htmlFor="password">password</label>
      <br />
      <input type="text" id="password" ref={passwordRef}/>
      <br />
      <button>Submit</button>
    </form>
  );
}
