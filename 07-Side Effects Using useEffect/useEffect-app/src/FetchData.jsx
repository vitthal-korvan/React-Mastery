import { useEffect, useState } from "react";
import { User } from "./User";

const URL = "https://jsonplaceholder.typicode.com/users";

export function FetchData() {
  const [users, setUsers] = useState([]);

  //for loading Effect => Throttling
  const[isLoading, setIsLoading] = useState(true);

  //For error checking
  const [error, setError] = useState(false)

  async function fetchedData() {
    const response = await fetch(URL);
    if (response.status >=200 && response.status<=299) {
      const data = await response.json();
      setUsers(data);
    }
    else{
      setError(true)
    }
    setIsLoading(false)
  }
  useEffect(() => {
    fetchedData();
  }, []);

  if(isLoading){
      return <h1>Loading ....</h1>
  }

  if (error) {
    return <h1>Something went Wrong</h1>
  }
  return (
    <div>
      {users.map((user) => (
         <User key={user.id} {...user}/>
      ))}
    </div>
  );
}
