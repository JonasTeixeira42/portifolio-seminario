import React from "react";
import Logo from "../Logo";

import "./styles.css";

const Menu = () => (
  <menu className="menu">
    <Logo />
    <nav>
      <a className="menu-link" href="#projects">
        Projects
      </a>
      <a className="menu-link" href="#services">
        Services
      </a>
      <a className="menu-link" href="#skills">
        Skills
      </a>
    </nav>
  </menu>
);

export default Menu;
