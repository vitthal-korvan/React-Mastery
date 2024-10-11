import { useContext } from "react";
import { AuthContext } from "./main";
export function BasicDetail(props) {
      const {username, email}= useContext(AuthContext)
  return <>
  <h1>Basic Details</h1>
  <h3>name : {username}</h3>
  <h3>email : {email}</h3>
  </>;
}
