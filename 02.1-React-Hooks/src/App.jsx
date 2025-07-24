import Count from "./Count";
import RenderingJSON from "./RenderingJSON";
import BasicForm from "./BasicForm";
const App = () => {
  //reserved keyword of javascript will not appear on browser
  // let num = 12;
  // let str = "Code Subtle";
  // let bool = true;
  // let nu = null;
  // let ud = undefined;
  // let arr = [<h1>Hey</h1>, 12, "hello", true, null, undefined, "name"];
  // let obj = { name: "vitthal", age: 24 };
  return (
    <div>
      <BasicForm/>
      {/* <RenderingJSON/> */}
      {/* <Count/>
      <h3>{num}</h3>
      <h3>{str}</h3>
      <h3>{bool}</h3>
      <h3>{nu}</h3>
      <h3>{ud}</h3>
      <h3>{arr}</h3>
      <h3>{obj.name} || {obj.age}</h3> */}
    </div>
  );
};

export default App;
