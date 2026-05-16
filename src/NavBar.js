import React from "react";
import { Link } from "react-router-dom";
import { socialLinks } from "./data/siteContent";

export default function NavBar(){
    return (
    <nav className="navbar navbar-expand-sm bg-light d-flex justify-content-between sticky-top portfolio-navbar" aria-label="Main navigation">
            <ul className="navbar-nav d-flex align-items-center gap-2">
                <Link className="navbar-brand" to="/" aria-label="Go to home page">
                    <img src="PM_logo.svg" alt="name_icon" width="75"/>
                </Link>
                <li className = "nav-item">
                    <strong>
                        <Link className="nav-link" to="/projects">Projects</Link>
                    </strong>
                </li>

                <li className = "nav-item">
                    <strong>
                        <Link className="nav-link" to="/about">About</Link>
                    </strong>
                </li>
            </ul>
            <ul className="navbar-nav nav-social-row">
                <li className = "nav-item">
                    <a className="nav-link" href={socialLinks.github} aria-label="Open GitHub profile" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-github fa-2xl" aria-hidden="true"></i>
                    </a>
                </li>
                <li className = "nav-item">
                    <a className="nav-link" href={socialLinks.linkedin} aria-label="Open LinkedIn profile" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-linkedin fa-2xl" aria-hidden="true"></i>
                    </a>
                </li>
            </ul>
        </nav>
    )
}