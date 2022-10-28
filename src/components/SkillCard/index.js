import React from "react";

import "./styles.css";

const SkillCard = ({ children, title }) => (
  <article className="skill">
    <div className="skill-image bg">{children}</div>
    <h3 className="skill-title bg">{title}</h3>
  </article>
);

export default SkillCard;
