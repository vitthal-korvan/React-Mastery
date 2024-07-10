//hooks
//useState
//useEffect

//useState is a hook which you can call as a function. it takes default value as a argument

//useState(defaultValue) -> it'll return an array
//[stateValue, functionToUpdateThatStateValue];

//In react we cannot use normal variables
//to change the UI

//state == data
//When state change -> our component will re-render -> UI

import { useState } from "react";

function StateSimple() {
  const [name, setName] = useState("vitthal");
  //console.log(name, setName);
  function updateName() {
    if (name === "vitthal") {
      setName("korvan");
    } else {
      setName("vitthal");
    }
  }

  return (
    <>
      <h1>{name}</h1>
      <button onClick={updateName}>Change Name</button>
    </>
  );
}

export default StateSimple;
