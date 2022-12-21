import React from "react";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
    const { id, image, name, bullet1, bullet2, bullet3, technology } = project;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">{name}</h2>
                <p className="text-start my-3">
                    <strong>Features & Functionalities:</strong>
                    <li>{bullet1}</li>
                    <li>{bullet2}</li>
                    <li className="mb-2">{bullet3}</li>
                    <strong>Technology:</strong>
                    {technology}
                </p>
                <div className="card-actions">
                    <Link
                        to={`/projects/${id}`}
                        className="inline-flex px-4 py-2 text-lg font-bold shadow-xl text-white bg-stone-800 hover:bg-sky-100 border-4 border-stone-800 hover:text-stone-800 rounded-md"
                    >
                        Show Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Project;
