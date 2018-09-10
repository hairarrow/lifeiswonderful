import "./header.css";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

const Header = ({ light }) => (
  <nav className="header">
    <Link to="/" className="header__brand">
      <div className="header__brand-logo">
        <Logo light={light} />
      </div>
      <h1
        className={`header__brand-title ${
          light ? "header__brand-title--light" : ""
        }`}
      >
        Metacard
      </h1>
    </Link>
  </nav>
);

Header.defaultProps = {
  light: false
};

Header.propTypes = {
  light: PropTypes.bool
};

export default Header;
