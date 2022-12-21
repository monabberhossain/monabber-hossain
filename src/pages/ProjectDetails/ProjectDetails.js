import React from "react";
import { useLoaderData } from "react-router-dom";
import ProjectDetail from "./ProjectDetail";

const ProjectDetails = () => {
    const url = window.location.href;
    const urlId = url.split("/")[4];
    const projects = useLoaderData("");

    return (
        <div className="bg-sky-100 px-4 py-12 md:py-16 lg:py-20">
            <div className="w-[100%] lg:w-[84%] mx-auto">
                <h1 className="text-4xl font-bold leading-loose">
                    Project Details
                </h1>
                <hr className="border-2 border-stone-800" />
                {Array.isArray(projects) ? (
                    projects.map((project) => (
                        <ProjectDetail
                            key={project.id}
                            project={project}
                            urlId={urlId}
                        ></ProjectDetail>
                    ))
                ) : null}
            </div>
        </div>
    );
};

export default ProjectDetails;
