import React from "react";
import { Link } from "react-router-dom";
import { projects } from "./data/siteContent";

export default function Projects(){
    return (
        <section className = "container page-shell projects-shell">
            <div className="projects-header">
                <p className="eyebrow">Projects</p>
                <h1>Selected Work</h1>
                <p>
                    Practical products with clear constraints, iterative decisions,
                    and documented lessons.
                </p>
            </div>

            <div className = "row g-4">
                {projects.map((project) => (
                    <div className = "col-12 col-lg-6" key={project.slug}>
                        <article className="card project-card">
                            <img className="app-card-img" src={project.image} alt={`${project.title} screenshot`} />
                            <div className = "card-body">
                                <p className="status-chip">{project.status}</p>
                                <h2 className = "card-title display-6">{project.title}</h2>
                                <p className="card-subtitle lead">{project.subtitle}</p>
                                <p>{project.description}</p>
                                <ul className="stack-list compact">
                                    {project.stack.map((item) => (
                                        <li key={`${project.slug}-${item}`}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className = "card-footer project-card-footer">
                                <Link to={`/projects/${project.slug}`} className="btn btn-outline-dark btn-sm">
                                    Case Study
                                </Link>
                                {project.repoUrl ? (
                                    <a
                                        href={project.repoUrl}
                                        className="btn btn-dark btn-sm"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Repository
                                    </a>
                                ) : null}
                                {project.liveUrl ? (
                                    <a
                                        href={project.liveUrl}
                                        className="btn btn-primary btn-sm"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Live Demo
                                    </a>
                                ) : (
                                    <span className="project-note">No live deployment currently.</span>
                                )}
                            </div>
                        </article>
                    </div>
                ))}
            </div>
        </section>
    )
}
