import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h1>Header</h1>
      <ul>
        <li>
          <Link to="first">First</Link>
        </li>
        <li>
          <Link to="second">Second</Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
