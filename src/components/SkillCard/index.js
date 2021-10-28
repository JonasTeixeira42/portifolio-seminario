import React from 'react'

import './styles.css'

const SkillCard = ({ image, title = '' }) => (
  <article className="skill">
    <div className="skill__image background">{!!image && image}</div>
    <h2 className="skill__title background">{title}</h2>
  </article>
)

export default SkillCard