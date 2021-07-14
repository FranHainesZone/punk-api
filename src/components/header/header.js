import React from "react";

import "./header.scss";
import logo from "../../images/logo.png";

export const Header = () => {
  return (
    <header>
      <img src={logo} alt="Brewdog logo" className="header__logo" />
    </header>
  );
};

export default Header;
