import React, { useState } from "react";

export function AddTodoForm({ dispatch }) {
  const [title, setTitle] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = 
      {
        title: title,
        completed: false,
        id: crypto.randomUUID(),
      }
    ;

    dispatch({ type: "Add_Todo", payload: { newTodo: newTodo } });
    setTitle("")
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "40vw",
            padding: "0.5rem",
            margin: "1rem",
          }}
        />
        <button
          type="submit"
          style={{
            width: "10vw",
            padding: "0.5rem",
          }}
        >
          {" "}
          Submit
        </button>
      </form>
    </>
  );
}
