import React from "react";

import "./styles.css";

const ProjectCard = ({ title, description, link }) => (
  <a href={link} target="_blank" rel="noreferrer">
    <article className="card-content">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </article>
  </a>
);

export default ProjectCard;
