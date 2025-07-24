import { useState } from "react";

const BasicForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  

  return (
    <>
      <form onSubmit={(e)=>{
      e.preventDefault()
      const newUser = {name, age}
      console.log(newUser);
      
      }}>
        <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} value={name}/>
        <input type="number" placeholder="age" onChange={(e) =>   setAge(e.target.value)} value={age}/>
        <button>
          Submit
        </button>
      </form>

      <h2>UserDetails</h2>
      <h3>
        {name} {age}
      </h3>
    </>
  );
};

export default BasicForm;
document.querySelector("#name.value");
