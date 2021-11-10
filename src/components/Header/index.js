import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../../assets/logo.png";
import { auth } from "../../firebase/utils";

import "./styles.scss";

const Header = (props) => {
  const { currentUser } = props;
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="callToActions">
          {currentUser ? (
            <ul>
              <li>
                <span onClick={() => auth.signOut()}>LogOut</span>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/registration">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
