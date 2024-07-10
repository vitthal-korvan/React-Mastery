import User from "./component/User"
function App() {
  const user = [
    {id:'1', name:'vitthal', lastName:'korvan'},
    {id:'2', name:'anand', lastName:'korvan'},
    {id:'3', name:'lingesh', lastName:'korvan'}
  ]
  return (
    <>
      {/* <User name={user[0].name} lastName={user[0].lastName} />
      <User name={user[1].name} lastName={user[1].lastName} />
      <User name={user[2].name} lastName={user[2].lastName} /> */}

      {
        // user.map((user)=>{
        //   return <User name={user.name} lastName={user.lastName} />;
        // })
      }

      {/* {
        user.map((user)=>(
         <User name={user.name} lastName={user.lastName} />
      ))
      } */}

      {user.map((user) => (
        <User {...user} key={user.id} />
      ))}
    </>
  );
}

export default App
