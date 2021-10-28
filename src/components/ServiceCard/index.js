import React from 'react'

import './styles.css'

const ServiceCard = ({
  image,
  title = '',
  description = ''
}) => (
  <article className="service">
    {!!image && image}
    <h2 className="service__title">{title}</h2>
    <p className="service__description">{description}</p>
  </article>
)

export default ServiceCard