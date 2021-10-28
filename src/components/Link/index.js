import React from 'react'

import './styles.css'

const Link = ({ title = 'Link', link = '#' }) => (
  <a href={link} target="_blank" rel="noreferrer" className="link">
    {title}
  </a>
)

export default Link