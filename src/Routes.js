import React from "react";
<<<<<<< HEAD
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home'
import About from "./About";
import Projects from "./Projects";
// import {BookItProjectPage} from "./BookItProjectPage";
// import {ByteProjectPage} from "./ByteProjectPage"
=======
import { Routes, Route } from 'react-router-dom';
import Home from './Home'
import About from "./About";
import Projects from "./Projects";
import ProjectDetail from "./ProjectDetail";
import NotFound from "./NotFound";
>>>>>>> 56c70a2e (Portfolio revamp: new design, routes, projects, and metadata)

export default function AppRoutes(){

    return(
        <div>
            <Routes>
<<<<<<< HEAD
                <Route path="/about" element={<About/>} />
                {/* <Route path="/BookIt" element={<BookItProjectPage/>} />
                <Route path="/byte" element={<ByteProjectPage/>} /> */}
                <Route path="/projects" element={<Projects/>} />
                <Route path="/" element={<Home/>} />
=======
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/projects/:slug" element={<ProjectDetail/>} />
                <Route path="*" element={<NotFound/>} />
>>>>>>> 56c70a2e (Portfolio revamp: new design, routes, projects, and metadata)

            </Routes>
        </div>
    )

}
