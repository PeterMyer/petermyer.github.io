import { Link, useParams } from "react-router-dom";
import { projects } from "./data/siteContent";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="container page-shell not-found-shell">
        <p className="eyebrow">Project Not Found</p>
        <h1>That case study is not available yet.</h1>
        <div className="cta-row">
          <Link to="/projects" className="btn btn-primary btn-lg">
            Back To Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="container page-shell project-detail-shell">
      <p className="eyebrow">{project.status}</p>
      <h1>{project.title}</h1>
      <p className="lead">{project.subtitle}</p>
      <img
        className="project-detail-image"
        src={project.image}
        alt={`${project.title} preview`}
      />
      <p>{project.description}</p>
      <p>{project.impact}</p>
      <h2>Tech Stack</h2>
      <ul className="stack-list">
        {project.stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h2>Key Lesson</h2>
      <p>{project.lessons}</p>
      <div className="cta-row">
        <Link to="/projects" className="btn btn-outline-dark">
          Back To All Projects
        </Link>
        {project.repoUrl ? (
          <a
            href={project.repoUrl}
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            View Repository
          </a>
        ) : null}
      </div>
    </section>
  );
}
