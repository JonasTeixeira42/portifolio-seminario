import React from 'react'

import Link from '../../components/Link'
import Heading from '../../components/Heading'

import './styles.css'

const Footer = () => (
  <footer>
    <footer className="footer">
      <Heading>Reach me Out</Heading>
      <div className="footer__link">
        <Link link="mailto:portifolio@teste.com" title="Email" />
        <Link link="https://www.linkedin.com" title="Linkedin" />
        <Link link="https://github.com/" title="Github" />
        <Link link="https://www.instagram.com" title="Instagram" />
      </div>
    </footer>
  </footer>
)

export default Footer