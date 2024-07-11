import "./App.css";

function User({ firstname, lastname, age, id, IncreaseAge, DeleteUser }) {
  return (
    <>
      {/* <div key={uuid()} className="user">
        <p>firstName: {userDetail.fname}</p>
        <p>lastName: {userDetail.lname}</p>
        <p>age: {userDetail.age}</p>
      </div> */}
      <div className="user">
        <p>firstName: {firstname}</p>
        <p>lastName: {lastname}</p>
        <p>age: {age}</p>
        <button onClick={() => IncreaseAge(id)}>Increase Age</button>
        <button onClick={() => DeleteUser(id)}>Delete User</button>
      </div>
    </>
  );
}

export default User;
