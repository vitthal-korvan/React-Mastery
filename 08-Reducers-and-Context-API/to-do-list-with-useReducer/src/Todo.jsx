import React from "react";

export function Todo({ id, title, completed, dispatch }) {
  function handleDelete() {
    dispatch({type:"Delete_Todo", payload:{id:id}});
  }
  function handleToggle(){
      dispatch({ type: "Toggle_Todo", payload: { id: id } });
  }
  return (
    <>
      <div
        style={{
            textAlign:"center",
          fontFamily: "sans-serif",
          padding: "1rem",
          margin: "1rem",
          backgroundColor: "gray",
          borderRadius: "1rem",
          width: "50vw",
        }}
      >
        <h4>ID : {id}</h4>
        <h4
          style={{
            textDecoration: completed ? "line-through" : "solid",
          }}
        >
          Title : {title}
        </h4>
        <h4>Completed : {completed ? "completed" : "not completed"}</h4>
        <button
          style={{
            padding: "0.6rem 1.4rem",
          }}
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          onClick={handleToggle}
          style={{
            margin:"0.2rem",
            padding: "0.6rem 1.4rem",
          }}
        >
          Toggle{" "}
        </button>
      </div>
    </>
  );
}
