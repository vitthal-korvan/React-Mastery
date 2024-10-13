import { useReducer } from "react";
import { AddTodoForm } from "./AddTodoForm";
import { Todos } from "./Todos";
import { createContext } from "react";

export const TodosContext = createContext()

function reducer(todos, action) {
  if (action.type === "Add_Todo") {
    return [...todos, action.payload.newTodo]
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
  { id: "2", title: "write articles", completed: false },
];
function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  return (
    <TodosContext.Provider value={{
        dispatch:dispatch,
        todos:todos
    }}>
      <AddTodoForm  />
      <Todos />
    </TodosContext.Provider>
  );
}

export default App;
