import React from "react";
import { Link } from "react-router-dom";
import { profile } from "./data/siteContent";

export default function Home(){
    return(
        <section className="page-shell home-shell container">
            <div className = "row d-flex align-items-center hero-grid">
                <div className = "col-lg-5 p-4 p-lg-5 text-center" >
                    <img className="img-fluid profile-image" src="profile.jpeg" alt="Peter Myer portrait" width = "320"/>
                </div>
                <div className = "col-lg-7 p-4 p-lg-5">
                    <p className="eyebrow">Creative Developer Portfolio</p>
                    <h1 className ="display-3">Hi, I am <strong><span className="text-highlight">{profile.name}</span></strong></h1>
                    <p className="lead hero-title">{profile.title}</p>
                    <hr className="my-4" />
                    <p className="hero-copy">{profile.intro}</p>
                    <p className="hero-copy muted">{profile.focus}</p>
                    <div className="cta-row">
                        <Link to="/projects" className="btn btn-primary btn-lg">
                            View My Work
                        </Link>
                        <Link to="/about" className="btn btn-outline-dark btn-lg">
                            Contact Me
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    )
}