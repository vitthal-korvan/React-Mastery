import { useReducer } from "react";
import { AddTodoForm } from "./AddTodoForm";
import { Todos } from "./Todos";

function reducer(todos, action) {
  if (action.type === "Add_Todo") {
    return todos.filter((todo) => todo.id !== action.payload.id);
  }
  if (action.type === "Delete_Todo") {
    // console.log(action.payload.id);
    // console.log(action.type);
    return todos.filter((todo) => todo.id !== action.payload.id);
  }
  if (action.type === "Toggle_Todo") {
    // console.log("Toggle Clicked!");
    return todos.map((todo) => {
      if (todo.id === action.payload.id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
  }
  return todos;
}
const initialTodos = [
  { id: "1", title: "watch tutorials", completed: false },
  { id: "2", title: "write articles", completed: true },
  { id: "3", title: "teach students", completed: false },
  { id: "4", title: "make projects", completed: false },
];
function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  return (
    <>
      <AddTodoForm  dispatch={dispatch}/>
      <Todos todos={todos} dispatch={dispatch} />
    </>
  );
}

export default App;
