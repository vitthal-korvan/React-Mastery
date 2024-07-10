import React from "react";
function User({lastName, name}) {
  return (
    <>
      <h1>
        {name} {lastName}
      </h1>
    </>
  );
}
export default User;
