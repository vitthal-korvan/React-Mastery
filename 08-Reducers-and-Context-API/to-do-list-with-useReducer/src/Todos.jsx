import React from "react";
import { Todo } from "./Todo";

export function Todos({ todos, dispatch }) {
  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} dispatch={dispatch} />
      ))}
    </>
  );
}
