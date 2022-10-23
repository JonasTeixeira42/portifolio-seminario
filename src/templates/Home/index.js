import React from 'react'

import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import Heading from '../../components/Heading'
import SkillCard from '../../components/SkillCard'
import ProjectCard from '../../components/ProjectCard'
import ServiceCard from '../../components/ServiceCard'
import Introduction from '../../components/Introduction'

import './styles.css'

const Home = ({ skills, projects, services }) => {
  return (
    <main className="home">
      <header className="light-bg">
        <div className="container">
          <Menu />
        </div>
      </header>

      <section className="container section introduction">
        <Introduction />
      </section>

      <section className="section light-bg">
        <Heading id="projects" lineBottom>
          Projects
        </Heading>
        <div className="container projects__container">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </section>

      <section className="section">
        <Heading id="services" lineBottom>
          Services
        </Heading>
        <div className="container services__container">
          {services.map((service, index) => {
            const Icon = service.image

            return (
              <ServiceCard
                key={index}
                image={<Icon size={70} color="#ff0a54" />}
                title={service.title}
                description={service.description}
              />
            )
          })}
        </div>
      </section>

      <section className="section light-bg">
        <Heading id="skills" lineBottom>
          Skills
        </Heading>
        <div className="container skills__container">
          {skills.map((skill, index) => {
            const Icon = skill.image

            return (
              <SkillCard
                key={index}
                image={<Icon size={70} color="#ff0a54" />}
                title={skill.title}
              />
            )
          })}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Footer />
        </div>
      </section>
    </main>
  )
}

export default Home
