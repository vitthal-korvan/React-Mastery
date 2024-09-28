import { useEffect, useState } from "react";

//cleanup function

//1: before component unmount

//2: when there is some value in dependency array     

//when value of counter changes
//component rendered
//cleanup function rendered
//useEffect rendered

export function CleanupFunctionDemo() {
  console.log("component rendered");
  const [counter, setcounter] = useState(0);
  useEffect(() => {
      console.log("useEffect rendered");
      return function(){
            console.log('cleanup function rendered');
      }

  }, [counter]);

  return (
    <>
      <div>
        <h3>Counter : {counter}</h3>
        <br />
        <button onClick={() => setcounter((prevCounter) => prevCounter + 1)}>
          Increase
        </button>
      </div>
    </>
  );
}
