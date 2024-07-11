import { useState } from "react";
import "./App.css";
import Users from "./Users";

function App() {
  const [users, setUser] = useState([
    { id: 1, fname: "vitthal", lname: "korvan", age: 24 },
    { id: 2, fname: "Mahesh", lname: "boga", age: 24 },
    { id: 3, fname: "jagannath", lname: "patta", age: 24 },
    { id: 4, fname: "arpit", lname: "gupta", age: 24 },
  ]);

  const IncreaseAge = (id) => {
    setUser((prevState) => {
      return prevState.map((user) => {
        if (user.id === id) {
          return { ...user, age: user.age + 1 };
        } else {
          return user;
        }
      });
    });
  };

  // const DeleteUser=(id)=>{
  //   setUser((prevState)=>{
  //     return prevState.filter(user=>{
  //       return user.id !== id 
  //     })
  //   })
  // }

  const DeleteUser =(id)=> setUser(prevState => prevState.filter(user => user.id !==id))

  return (
    <>
      <Users users={users} IncreaseAge={IncreaseAge} DeleteUser = {DeleteUser}/>
    </>
  );
}

export default App;
