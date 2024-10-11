import React, { useState } from "react";

export function AddTodoForm({ dispatch }) {
  const [title, setTitle] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = [
      {
        title: title,
        completed: false,
        id: crypto.randomUUID(),
      },
    ];
    //     console.log(newTodo);

    dispatch({ type: "Add_Todo", payload: { newTodo: newTodo } });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit"> Submit</button>
      </form>
    </>
  );
}
