import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import Logo from "../../assets/img/logo.png";

import Button from "../Button";
//import Button from "./components/ButtonLink";

export default function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="TECHFLIX Logo" />
      </Link>

      <Button as={Link} to="/cadastro/Video" className="ButtonLink">
        Novo Vídeo
      </Button>
    </nav>
  );
}
