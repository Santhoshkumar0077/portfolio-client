import React from "react";
import projects from "../data/projects";

function Projects() {
    return (
        <div className="container mt-5">
            <h2 className="text-center">My Projects</h2>
            <div className="row">
                {projects.map((project) => (
                    <div key={project.id} className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.description}</p>
                                <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
