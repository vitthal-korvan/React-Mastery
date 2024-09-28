import React from "react";

export function User({name, username, email, address, phone, website, company}) {
  return (
    <div style={{margin:"1rem", padding:"1rem", background:"#292929", color:"#efefef" }}>
      <h4>Name: {name}</h4>
      <h4>UserName: {username}</h4>
      <h4>email: {email}</h4>
      <h4>city: {address.city}</h4>
      <h4>phone: {phone}</h4>
      <h4>website: {website}</h4>
      <h4>Company Name: {company.name}</h4>

    </div>
  );
}
