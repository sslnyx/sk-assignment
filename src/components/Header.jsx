import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header>
      <Link to="posts">
        <h1>ST Assignment</h1>
      </Link>
    </header>
  );
};

export default Header;
