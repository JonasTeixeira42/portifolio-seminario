import React from 'react'

import './styles.css'

const Menu = () => (
  <menu className="menu">
  <div className="menu__logo">Jonas</div>
  <nav>
    <a className="menu__link" href="#projects">
      Projects
    </a>
    <a className="menu__link" href="#services">
      Services
    </a>
    <a className="menu__link" href="#skills">
      Skills
    </a>
  </nav>
</menu>
)

export default Menu