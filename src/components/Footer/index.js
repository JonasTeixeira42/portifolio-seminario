import React from "react";

import Link from "../../components/Link";
import Heading from "../../components/Heading";

import "./styles.css";

const Footer = () => (
  <footer>
    <footer className="footer">
      <Heading>Reach me Out</Heading>
      <div className="link-container">
        <Link
          className="link"
          link="mailto:portifolio@teste.com"
          title="Email"
        />
        <Link
          className="link"
          link="https://www.linkedin.com"
          title="Linkedin"
        />
        <Link className="link" link="https://github.com/" title="Github" />
        <Link
          className="link"
          link="https://www.instagram.com"
          title="Instagram"
        />
      </div>
    </footer>
  </footer>
);

export default Footer;
