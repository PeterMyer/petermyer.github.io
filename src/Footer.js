<<<<<<< HEAD
export function Footer(){
    return(
    <div class="d-flex flex-column">
    <div id="page-content">
        <div class="container text-center">
        <div class="row justify-content-center">
            <div class="col-md-7">
            <h1 class="fw-light mt-4 text-white"></h1>
            <p class="lead text-white-50"></p>
            </div>
        </div>
        </div>
    </div>
    <footer id="sticky-footer" class="flex-shrink-0 py-4 bg-dark text-white-50">
        <div class="container text-center">
        <small>Copyright &copy; Peter Myer 2022</small>
        </div>
    </footer>
    </div>
=======
import { socialLinks } from "./data/siteContent";

export function Footer(){
    const year = new Date().getFullYear();

    return(
    <footer className="site-footer">
        <div className="container text-center footer-inner">
            <p className="footer-title">Open to thoughtful product collaborations.</p>
            <div className="footer-social-row">
                <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="Open GitHub profile">
                    <i className="fa-brands fa-github fa-xl" aria-hidden="true"></i>
                </a>
                <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="Open LinkedIn profile">
                    <i className="fa-brands fa-linkedin fa-xl" aria-hidden="true"></i>
                </a>
            </div>
            <small>Copyright &copy; Peter Myer {year}</small>
        </div>
    </footer>
>>>>>>> 56c70a2e (Portfolio revamp: new design, routes, projects, and metadata)
    )
}