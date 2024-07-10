import "./App.css"

function User({firstname, lastname, age}) {
  return (
    <>
      {/* <div key={uuid()} className="user">
        <p>firstName: {userDetail.fname}</p>
        <p>lastName: {userDetail.lname}</p>
        <p>age: {userDetail.age}</p>
      </div> */}
      <div  className="user">
        <p>firstName: {firstname}</p>
        <p>lastName: {lastname}</p>
        <p>age: {age}</p>
      </div>
    </>
  );
}

export default User
