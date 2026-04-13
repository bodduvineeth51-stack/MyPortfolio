import "./index.css";
import projectsData from "../Data/projectData";
import { useState } from "react";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">

      {/* 🔥 SECTION HEADING */}
      <div className="projects-header">
        <h1>
          My <span>Works</span>
        </h1>
      </div>

      {projectsData.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}

    </section>
  );
};

const ProjectItem = ({ project }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % project.images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="project-container">

      {/* LEFT SIDE - IMAGE CAROUSEL */}
      <div className="project-images">

        <div
          className="image-slider"
          style={{
            transform: `translateX(-${current * 100}%)`
          }}
        >
          {project.images.map((img, index) => (
            <img key={index} src={img} alt="project" />
          ))}
        </div>

        {/* BUTTONS */}
        <div className="slider-buttons">
          <button onClick={prevSlide}>‹</button>
          <button onClick={nextSlide}>›</button>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="project-content">

        <p className="project-meta">
          {project.location} · {project.type} · {project.year}
        </p>

        <h1>{project.title}</h1>

        <p className="project-desc">{project.description}</p>

        <ul>
          {project.features.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="project-tags">
          {project.tech.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>

        <a href={project.live} target="_blank" className="view-btn">
          VIEW
        </a>

      </div>
    </div>
  );
};

export default Projects;