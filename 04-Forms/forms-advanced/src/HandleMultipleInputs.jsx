import { useState } from "react";

function HandleMultipleInputs(props) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
  };

  const {
    firstName,
    lastName,
    email,
    userName,
    password,
    confirmPassword,
    phone,
    address,
  } = formData;

  return (
    <form onSubmit={handleSubmit} style={{ padding: "1rem" }}>
      <div className="formGroup">
        <label htmlFor="firstName">firstName</label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="lastName">lastName</label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="userName">userName</label>
        <br />
        <input
          type="text"
          name="userName"
          id="userName"
          value={userName}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="email">email</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={email}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="password">password</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="confirmPassword">confirm Password</label>
        <br />
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="phone">phone</label>
        <br />
        <input
          type="number"
          name="phone"
          id="phone"
          value={phone}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="address">address</label>
        <br />
        <input
          type="text"
          name="address"
          id="address"
          value={address}
          onChange={handleChange}
        />
      </div>
      <input type="submit" value="sign up" style={{ marginTop: "1rem" }} />
    </form>
  );
}
export default HandleMultipleInputs;
