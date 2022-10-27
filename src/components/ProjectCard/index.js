import React from "react";

import "./styles.css";

const ProjectCard = ({ title, description, link }) => (
  <a href={link} target="_blank" rel="noreferrer">
    <article className="card__content">
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
    </article>
  </a>
);

export default ProjectCard;
