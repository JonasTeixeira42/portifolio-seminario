import React from 'react'
import Home from '../../templates/Home'

import skills from './skills'
import projects from './projects'
import services from './services'

const Portfolio = () => {
  return <Home skills={skills} projects={projects} services={services} />
}

export default Portfolio
