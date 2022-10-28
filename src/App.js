import { SiReact } from "react-icons/si";
import { AiFillHtml5 as HTML } from "react-icons/ai";
import { DiCss3 as CSS } from "react-icons/di";
import { IoLogoJavascript as JS } from "react-icons/io";
import { SiC as C } from "react-icons/si";

import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import SkillCard from "./components/SkillCard";
import ProjectCard from "./components/ProjectCard";
import Introduction from "./components/Introduction";

import "./App.css";

function App() {
  return (
    <main>
      <header className="light-bg">
        <div className="container">
          <Menu />
        </div>
      </header>

      <section className="container section">
        <Introduction />
      </section>

      <section className="section light-bg">
        <Heading id="projects" lineBottom>
          Projects
        </Heading>
        <div className="container projects__container">
          <ProjectCard
            title="New Project"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo"
          />
          <ProjectCard
            title="New Project"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo"
          />
          <ProjectCard
            title="New Project"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo"
          />
        </div>
      </section>

      {/* <section className="section">
        <Heading id="services" lineBottom>
          Services
        </Heading>
        <div className="container services__container">
          {services.map((service, index) => {
            const Icon = service.image;

            return (
              <ServiceCard
                key={index}
                image={<Icon size={70} color="#ff0a54" />}
                title={service.title}
                description={service.description}
              />
            );
          })}
        </div>
      </section> */}

      <section className="section light-bg">
        <Heading id="skills" lineBottom>
          Skills
        </Heading>
        <div className="container skills__container">
          <SkillCard
            title="React"
            image={<SiReact size={70} color="#ff0a54" />}
          />
          <SkillCard title="HTML" image={<HTML size={70} color="#ff0a54" />} />
          <SkillCard title="CSS" image={<CSS size={70} color="#ff0a54" />} />
          <SkillCard
            title="Javascript"
            image={<JS size={70} color="#ff0a54" />}
          />
          <SkillCard
            title="C Language"
            image={<C size={70} color="#ff0a54" />}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Footer />
        </div>
      </section>
    </main>
  );
}

export default App;
