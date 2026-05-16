import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './Home'
import About from "./About";
import Projects from "./Projects";
import ProjectDetail from "./ProjectDetail";
import NotFound from "./NotFound";

export default function AppRoutes(){

    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/projects/:slug" element={<ProjectDetail/>} />
                <Route path="*" element={<NotFound/>} />

            </Routes>
        </div>
    )

}
