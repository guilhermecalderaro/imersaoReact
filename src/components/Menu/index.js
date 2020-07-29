import React from "react";

import "./styles.css";
import Logo from "../../assets/img/logo.png";

import Button from "../Button";
//import Button from "./components/ButtonLink";

export default function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="TECHFLIX Logo" />
      </a>

      <Button as="a" href="/" className="ButtonLink">
        Novo Vídeo
      </Button>
    </nav>
  );
}
