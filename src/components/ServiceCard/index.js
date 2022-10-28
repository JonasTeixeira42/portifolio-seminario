import React from "react";

import "./styles.css";

const ServiceCard = ({ image, title, description }) => (
  <article className="service">
    {image}
    <h2 className="service-title">{title}</h2>
    <p className="service-description">{description}</p>
  </article>
);

export default ServiceCard;
