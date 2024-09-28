import { useEffect, useState } from "react";
import { User } from "./User";

const URL = "https://jsonplaceholder.typicode.com/users";

export function FetchData() {
  const [users, setUsers] = useState([]);

  //for loading Effect => Throttling
  const[isLoading, setIsLoading] = useState(true);

  //For error checking
  const [error, setError] = useState(false)

  useEffect(() =>{
    //for Aborting on fetching the data
    const controller = new AbortController();
    console.log(controller);
    
    const signal = controller.signal;
    console.log(signal);
    

    async function fetchedData() {
      //we can pass signal onject 
    const response = await fetch(URL, { signal:signal });
    if (response.status >=200 && response.status<=299) {
      const data = await response.json();
      setUsers(data);
    }
    else{
      setError(true)
    }
    setIsLoading(false)
  }

    fetchedData();
    //this return is for cleanup function for useEffect
    return ()=>{
      console.log('aborting request....');
      controller.abort()
      
    }
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
