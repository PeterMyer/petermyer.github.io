import React, {useEffect} from "react";

export function BookItProjectPage(){

    const openTab=(event, tabName)=>{
    // Get all elements with class="tabcontent" and hide them
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    let thisDocument = document.getElementById(tabName)
    thisDocument.style.display = "block";
    event.currentTarget.className += " active";
    }

    useEffect(()=>{
        document.getElementById("defaultOpen").click()
    },[])

    return(
        <article>
            <div class="tab">
                <button class="tablinks" id="defaultOpen" onClick={(event)=>openTab( event,"Summary")}> Summary</button>
                <button class="tablinks" id="defaultOpen" onClick={(event)=>openTab( event,"TechStack")}> Tech Stack</button>
                <button class="tablinks"  onClick={(event)=>openTab(event, "Expansions")}>Future Expansions</button>
            </div>
            <section>
                <h1 className="display-6">BookIt</h1>
                <div>
                    <a href="#"><i class="fa-brands fa-github"></i></a> 
                    <a href="https://bookit-web-app.herokuapp.com/">Visit BookIt Web App</a> 
                </div>
                <div id="Summary" class="tabcontent">
                    <div className="container pt-1">
                        <div>In Progress</div>
                    </div>
                    <div className="container pt-3">
                        <p>
                            A combination of web app and Google Chrome extension, BookIt was envisioned as a solution to the problem of backlogged articles, images, and 'someday' content that many of us have ever growing in our browser's bookmarks.
                        </p>
                        <p>Alongside adding pages to a user's collection, BookIt tracks the status of which articles have actually been read, and when. Additionally, users can generate a link to easily share
                            selected content with their peers.</p>
                    </div>
                </div>
                <div id="TechStack" class="tabcontent">
                    <ul>
                        <li>Built in Node.js with React and Express</li>
                        <li>PostgresSQL DB with Sequelize ORM for managing user data</li>
                        <li>Chrome extension created with Manifest V3</li>
                        <li>Metascrapper.js retrieves article OpenGraph data prior to saving to database </li>
                        <li>Ag-grid to construct table views for user and shared articles</li>
                        <li>Plotly.js for creating user data visualizations</li>
                    </ul>
                </div>
                <div id="Expansions" class="tabcontent">
                    <ul>
                        <li>Create a main page which can host featured and popular articles or categories for all users</li>
                        <li>Provide higher order tags or folders to increate organization options</li>
                        <li>Integrate Auth0 security</li>
                        <li>Allow users to set goals for reading articles or tagged content</li>
                        <li>Provide mechanism to remind, or nudge, users to hit their reading goals</li>
                        <li>Create additional data views for interesting user metrics</li>
                    </ul>
                </div>
            </section>
        </article>
)}