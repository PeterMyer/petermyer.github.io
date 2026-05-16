import React from "react"
import { aboutHighlights, profile, socialLinks } from "./data/siteContent";

export default function About(){
    return (
        <section className="container page-shell about-shell">
            <div className="row g-4 align-items-start">
                <div className ="col-lg-7">
                    <p className="eyebrow">About</p>
                    <h1>Building Useful Products With Personality</h1>
                    <div className = "row text-center text-lg-start mt-3">
                        <ul className="col-md-6 about-me-list">
                            <li className="lead">{profile.title}</li>
                        </ul>
                        <ul className="col-md-6 about-me-list">
                            <li className="lead">{profile.location}</li>
                        </ul>
                    </div>
                    <div className ='about-grid'>
                        {aboutHighlights.map((item) => (
                            <article className="about-card" key={item.title}>
                                <div className="about-icon-wrap">
                                    <i className={`about-icon fa-solid ${item.icon} fa-xl`} aria-hidden="true"></i>
                                </div>
                                <div>
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <aside className = "col-lg-5 d-flex flex-column align-items-center gap-4" id="contact">
                    <img className="profile-image_large " src="Hike_Profile2.png" alt="Peter Myer hiking portrait"/>
                    <div className="contact-card">
                        <h2>Get In Touch</h2>
                        <p>
                            Have a project idea, collaboration, or role in mind? I usually reply
                            within two business days.
                        </p>
                        <p>
                            <i className="fa-solid fa-envelope me-2" aria-hidden="true"></i>
                            <strong>Email:</strong> {profile.contactEmail}
                        </p>
                        <p>
                            <i className="fa-brands fa-linkedin me-2" aria-hidden="true"></i>
                            <strong>LinkedIn:</strong>{" "}
                            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                                linkedin.com/in/petermyer
                            </a>
                        </p>
                    </div>
                </aside>
            </div>
        </section>
    )
}
