import { useState } from "react";

function ObjectState() {
  const [person, setPerson] = useState({
      id:1,
      fName:'Vitthal',
      lName:'Korvan',
      email:'vitthalkorvan@gmail.com',
      mob:'9876543210',
      age:24
  });

  const IncreaseAge =()=>{
      // setPerson((prevPerson)=>{
      //       return {...prevPerson, age:prevPerson.age+1}
      // })
      setPerson((prevPerson)=> ({...prevPerson, age:prevPerson.age+1}))
  }
  return (
    <>
      <div >
        <p>FirstName : {person.fName}</p>
        <p>LastName : {person.lName}</p>
        <p>Email : {person.email}</p>
        <p>Mobile : {person.mob}</p>
        <p>Age : {person.age}</p>
        <button onClick={IncreaseAge}>Increase Age</button>
      </div>
    </>
  );
}
export default ObjectState;
