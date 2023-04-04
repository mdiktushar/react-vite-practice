import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Link to={'/home'}>Home</Link>
      <Link to={'/contact'}>Contact</Link>
      <Link to={'/about'}>About</Link>
    </div>
  );
};

export default Main;
