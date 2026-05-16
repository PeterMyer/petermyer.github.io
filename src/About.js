<<<<<<< HEAD
import {useState} from "react"
import CssLoader from "./CssLoader";


export default function About(){
    const [loading, setLoading] = useState(true);

    return (
        <div className="container-fluid row">
        <div className ="col">
        <div className="container mt-5">
            <div className = "col ">
                <div className = "row text-center">
                <ul className="col about-me-list">
                    <li className="lead">Fullstack Web Developer</li>
                </ul>
                <ul className="col about-me-list">
                    <li className="lead">Austin, Texas</li>
                </ul>
                </div>
                <div className ='container d-flex flex-column '>
                    <div className="container d-flex align-items-center">
                            <div className="me-3"> 
                                <i class="about-icon fa-solid fa-graduation-cap fa-2xl"></i>
                            </div>
                            <p>I have always had a wide range of interests and have been formally educated in Illustration, Political Science, and Business. I was drawn to development by the combination of creativity and utility.</p>
                        </div>
                        <div className="container d-flex align-items-center">
                            <div className="me-3">
                                <i class=" about-icon fa-solid fa-code fa-2xl"></i>
                            </div>
                            <p>Originally self-taught in Python, I trained in the Javascript NERD stack(Node.js, Express, React, and Relational DBs) at Fullstack Academy.</p>
                        </div>
                        <div className="container d-flex align-items-center">
                            <div className="me-3">
                            <i class="about-icon fa-solid fa-seedling fa-2xl"></i>
                            </div>
                            <p>I'm passionate about projects that help people engage in self-improvement and personal growth.
                            I'm especially curious online platforms for education, skill development and habit building.</p>
                        </div>
                        <div className="container d-flex align-items-center">
                            <div className="me-3">
                            <i class="about-icon fa-solid fa-kitchen-set fa-2xl"></i>
                            </div>
                            <p>I have a variety of hobbies. Currently in my free time I enjoy cooking, camping, and playing video games.</p>
                        </div>
                    </div>
            </div>
        </div>
        </div>
        <div className = "col d-flex flex-row-reverse">
            <div 
                className = "lds-ring-container" 
                style={{display: loading ? "block" : "none"}}>
                    <CssLoader/>
            </div>
                <img 
                    id="about_profile_image" 
                    className="profile-image_large " 
                    src="Hike_Profile2.png" 
                    alt="profile_pic" 
                    onLoad={() => setLoading(false)} 
                    style={{display: loading ? "none" : "block"}}/>
        </div>
    </div>
=======
import React from "react"
import { aboutHighlights, profile } from "./data/siteContent";

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
                            Share a project idea, collaboration, or role. I usually reply within
                            two business days.
                        </p>
                        <form
                            className="contact-form"
                            action={`mailto:${profile.contactEmail}`}
                            method="post"
                            encType="text/plain"
                        >
                            <label htmlFor="contact-name">Name</label>
                            <input id="contact-name" name="name" type="text" required />

                            <label htmlFor="contact-email">Email</label>
                            <input id="contact-email" name="email" type="email" required />

                            <label htmlFor="contact-message">Message</label>
                            <textarea id="contact-message" name="message" rows="4" required></textarea>

                            <button type="submit" className="btn btn-primary">
                                Send Message
                            </button>
                        </form>
                        <p className="small text-muted mb-0">
                            This opens your default email client to send the message.
                        </p>
                    </div>
                </aside>
            </div>
        </section>
>>>>>>> 56c70a2e (Portfolio revamp: new design, routes, projects, and metadata)
    )
}
