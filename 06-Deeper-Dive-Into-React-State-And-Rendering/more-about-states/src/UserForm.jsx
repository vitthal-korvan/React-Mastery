import React, {useState} from "react";

export function UserForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const fullName = firstName + " "+ lastName
  return (
    <form>
      <h1>form</h1>
      <div>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </div>
      <br />
      <div>
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </div>
      <br />
      <h2>User Details</h2>
      <div>
            <p>First Name : {firstName}</p>
            <p>Last Name : {lastName}</p>
            <p>Full Name : {fullName}</p>
      </div>

    </form>
  );
}
