import "./header.css";
import LOGO from "./logo-dark.svg";
import React from "react";

const Header = () => (
  <nav className="header">
    <div className="header__brand">
      <img className="header__brand-logo" src={LOGO} alt="Metacard" />
      <h1 className="header__brand-title">Metacard</h1>
    </div>
  </nav>
);

export default Header;
