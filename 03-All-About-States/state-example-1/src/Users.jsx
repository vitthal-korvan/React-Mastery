import React from "react";
import "./App.css";
import User from "./User";

//Prop Drilling
function Users({users, IncreaseAge, DeleteUser}) {
  return (
    <>
      {/* {users.map((user) => (
        <div key={uuid()} className="user">
          <p>firstName: {user.fname}</p>
          <p>lastName: {user.lname}</p>
          <p>age: {user.age}</p>
        </div>
      ))} */}

      {
      users.map((user)=>{
            return <User {...user} key={user.id} IncreaseAge={IncreaseAge} DeleteUser = {DeleteUser}/>
      })
      }
    </>
  );
}
export default Users 