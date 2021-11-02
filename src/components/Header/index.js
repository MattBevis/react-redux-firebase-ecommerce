import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../../assets/logo.png";

import "./styles.scss";

const Header = (props) => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
      </div>
      <div className="callToActions">
        <ul>
          <li>
            <Link to="/registration">Register</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
