import React from "react";
import projectsData from "../data/projects";
import "../style.css";

const Projects = () => {
  return (
    <section className="projects">
      <h1>My Projects</h1>
      <div className="project-list">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
