import React, { useState } from "react";
import Project from "./Project";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    fetch("projectData.json")
        .then((res) => res.json())
        .then((data) => {
            setProjects(data);
        });

    return (
        <div className="bg-sky-100 px-4 py-12 md:py-16 lg:py-20">
            <div className="w-[100%] lg:w-[84%] mx-auto">
                <h1 className="text-4xl font-bold leading-loose">
                    My Projects
                </h1>
                <hr className="border-2 border-stone-800" />
                <p className="mt-4 text-xl font-semibold text-stone-800">
                    Some of my projects that I have developed through my
                    learning journey <br /> of full-stack web development using
                    react.js and node.js
                </p>
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <Project key={project.id} project={project}></Project>
                    ))}                    
                </div>
            </div>
        </div>
    );
};

export default Projects;
