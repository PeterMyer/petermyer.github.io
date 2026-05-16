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
    )
}