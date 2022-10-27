import React from "react";

import "./styles.css";

const SkillCard = ({ image, title = "" }) => (
  <article className="skill">
    <div className="skill__image bg">{!!image && image}</div>
    <h3 className="skill__title bg">{title}</h3>
  </article>
);

export default SkillCard;
