import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav className="nav">
        <ul>
          <li>
            <h1>Grocery-Shop</h1>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/addProduct">Login</Link>
          </li>
          <li>
            <Link to="/checkout">Check Out</Link>
          </li>
          <li>
            <Link to="/productMange">Mange</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
