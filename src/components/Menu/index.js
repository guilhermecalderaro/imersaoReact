import React from "react";

import "./styles.css";
import Logo from "../../assets/img/logo.png";

export default function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="TECHFLIX Logo" />
      </a>
    </nav>
  );
}
