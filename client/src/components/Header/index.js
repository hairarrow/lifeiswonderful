import "./header.css";
import Logo from "../Logo";
import React from "react";

const Header = () => (
  <nav className="header">
    <div className="header__brand">
      <div className="header__brand-logo">
        <Logo />
      </div>
      <h1 className="header__brand-title">Metacard</h1>
    </div>
  </nav>
);

export default Header;
