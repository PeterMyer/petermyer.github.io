import React from "react";
<<<<<<< HEAD

export default function Projects(){
    return (
        <div className = "container">
            <div className = "row">
                <div className = "col ">
                <div className="card" style={{width: "70%"}}>
                    <div className="col">
                            <div className = "card-body row">
                                <div className="col">
                                    <div className="card-header">
                                        <h2 className = "card-title display-6">BookIt</h2>
                                        <p className="card-subtitle lead">Article Manager</p>
                                    </div>
                                    Collect, organize and share pages from around the web using a combination chrome extension and web app
                                </div>
                                <div className="col">
                                    <a href="https://bookit-web-app.herokuapp.com/" class="card-link deployed-site-link">
                                        <img  className="app-card-img" src = "BookIt_web.png" alt="project_shot" width="100%"/>
                                    </a>
                                </div>
                            </div>
                            <div className = "card-footer">
                                    <a href="https://github.com/PeterMyer/BookIt" class="card-link github-link"><i class="fa-brands fa-github fa-2xl"></i></a>
                                </div>
                    </div>
                </div>
                </div>
                <div className = "col">
                <div className="card" style={{width: "70%"}}>
                    <div className="col">
                            <div className = "card-body row">
                                <div className="col">
                                    <div className="card-header">
                                        <h2 className = "card-title display-6">Byte</h2>
                                        <p className="card-subtitle lead">Recipe Reader</p>
                                    </div>
                                    Digitize your favorite cookbook recipes and auto-generate their nutrition info
                                </div>
                                    <div className="col">
                                    <a href="https://byte-recipe-reader.herokuapp.com/" class="card-link deployed-site-link">
                                        <img className="app-card-img" src = "Byte_Reader.png" alt="project_shot" width="100%"/>
                                    </a>
                                    </div>
                            </div>
                    </div>
                    <div className = "card-footer">
                        <a href="https://github.com/PeterMyer/Byte-RecipeReader" class="card-link github-link"><i class="fa-brands fa-github fa-2xl"></i></a>
                    </div>
                </div>
                </div>
            </div>
        </div>
=======
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
>>>>>>> 56c70a2e (Portfolio revamp: new design, routes, projects, and metadata)
    )
}
