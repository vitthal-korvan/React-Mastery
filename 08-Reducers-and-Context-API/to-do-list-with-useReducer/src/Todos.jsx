import {useContext} from "react";
import { Todo } from "./Todo";
import { TodosContext } from "./App";

export function Todos() {
  const { todos} = useContext(TodosContext)
  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </>
  );
}
