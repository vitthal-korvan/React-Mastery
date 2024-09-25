import { useState } from "react";
// import { CleanupFunctionDemo } from "./CleanupFunctionDemo";
// import { MouseMoveEvent } from "./MouseMoveEvent";
import {FetchData} from "./FetchData"

//Strict Mode -> for useEffect ->

//useEffect run
//cleanup function
//useEffect run again


function App() {
  const [showComponent, setShowComponent] = useState(true);
  return (
    <>
      {/* <ExampleUseEffect /> */}
      {/* <FetchData/> */}

      <label htmlFor="showComponent">show Component</label>
      <input
        type="checkbox"
        name="showComponent"
        id="showComponent"
        checked={showComponent}
        onChange={() => setShowComponent(!showComponent)}
      />
      {showComponent && <FetchData />}
    </>
  );
}

export default App;
