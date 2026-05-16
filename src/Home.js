import React from "react";
<<<<<<< HEAD
import Profile from './About'
import CssLoader from "./CssLoader";

export default function Home(){
    return(
        <div className="jumbotron jumbotron-fluid">
            <div className = "container row d-flex align-items-center ">
                <div className = "col p-5 text-center " >
                    <img className="img-fluid profile-image" src="profile.jpeg" alt="profile_pic" width = "300" loading="lazy"/>
                </div>
                <div className = "col p-5   ">
                    <h1 className ="display-3">Hi, I'm <strong><span className="text-highlight">Peter Myer</span></strong></h1>
                    <p className="lead">Full Stack Web Developer</p>
                    <hr className="my-4"></hr>
                    <p className = "small text-muted">Creating web applications with <strong>Javascript</strong> and <strong>Python</strong></p>
                    <p className = "small text-muted"> Experienced in <strong>Illustration</strong> and <strong>Design</strong></p>
                </div>
            </div>
        </div>
=======
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
>>>>>>> 56c70a2e (Portfolio revamp: new design, routes, projects, and metadata)

    )
}