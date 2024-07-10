import { useState } from "react";
import {v4 as uuid} from "uuid";

function ArrayState() {
  const [fruits, setFruits]=useState(['Mango','Apple','Banana','Chikoo']);
  const AddFruit=()=>{
    //setFruits([...fruits,'Orange'])
    // setFruits((prevFruits)=>{
    //   return [...prevFruits, 'Orange']
    // })

    setFruits((prevfruits)=>[...prevfruits, 'Orange'])
  }
  return <>
     <ul>
      {
      fruits.map((fruit)=>(
            <li key={uuid()}>{fruit}</li>
      ))
      }
      </ul> 
      <button onClick={AddFruit}>Add fruit</button>
  </>;
}
export default ArrayState;
