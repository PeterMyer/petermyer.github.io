import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="container page-shell not-found-shell">
      <p className="eyebrow">404</p>
      <h1>That page does not exist.</h1>
      <p>
        The link may be outdated. Head back to the projects list and continue
        exploring.
      </p>
      <div className="cta-row">
        <Link to="/projects" className="btn btn-primary btn-lg">
          View Projects
        </Link>
      </div>
    </section>
  );
}
