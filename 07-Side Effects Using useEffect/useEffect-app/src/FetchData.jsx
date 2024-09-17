import { useEffect, useState } from "react";
import { User } from "./User";

const URL = "https://jsonplaceholder.typicode.com/users";

export function FetchData() {
  const [users, setUsers] = useState([]);

  //for loading Effect => Throttling
  const[isLoading, setIsLoading] = useState(true);

  async function fetchedData() {
    const response = await fetch(URL);
    const data = await response.json();
    setUsers(data);
    setIsLoading(false)
  }
  useEffect(() => {
    fetchedData();
  }, []);

  if(isLoading){
      return <h1>Loading ...</h1>
  }
  return (
    <div>
      {users.map((user) => (
         <User key={user.id} {...user}/>
      ))}
    </div>
  );
}
