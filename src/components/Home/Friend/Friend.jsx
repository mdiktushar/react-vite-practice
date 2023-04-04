import React from "react";
import { Link } from "react-router-dom";

const Friend = ({friend}) => {
  const { id, name, email } = friend;
  return (
    <div>
      <h4>Name: {name}</h4>
      <h6>Email: {email}</h6>
      <p><Link to={`/home/${id}`}>Details</Link></p>
    </div>
  );
};

export default Friend;
