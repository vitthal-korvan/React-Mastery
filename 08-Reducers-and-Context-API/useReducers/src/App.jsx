import { useReducer } from "react";
import "./App.css";

//useReducer -> to manage complex states
//return [state, dispatch]

//as an argument

//1. reducer function
//2. initial state

//dispatch function
//we pass object {action} as an argument

//reducer function
//1. state,
//2. action

function reducer(state, action) {
  console.log(state, action);

  if (action.type === "INCREMENT") {
    return { ...state, count: state.count + 1 };
  }
  if (action.type === "RESET") {
    return { ...state, count: 0 };
  }
  if (action.type === "DECREMENT") {
    return { ...state, count: state.count - 1 };
  }
  return state;
  //throw new Error("Invalid Action Type");
}
const initialState = { count: 0 };

function App() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  function increase() {
    dispatch({ type: "INCREMENT" });
  }
  function decrease() {
    dispatch({ type: "DECREMENT" });
  }
  function reset() {
    dispatch({ type: "RESET" });
  }

  return (
    <>
      <h3>Counter</h3>
      <hr />
      <h1>{state.count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrease}>Decrease</button>
    </>
  );
}

export default App;
