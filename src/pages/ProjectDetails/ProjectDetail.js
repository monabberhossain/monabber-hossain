import React from "react";

const ProjectDetail = ({ project, urlId }) => {
    const {
        id,
        name,
        image1,
        image2,
        image3,
        bullet1,
        bullet2,
        bullet3,
        bullet4,
        bullet5,
        technology,
        client,
        server,
        live,
    } = project;
    if (id === urlId) {
        return (
            <div className="card mt-20 w-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image1} alt="" className="rounded-xl" />
                    <img src={image2} alt="" className="rounded-xl" />
                    <img src={image3} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl font-semibold">
                        Project Name:{" "}
                        <span className="px-3 py-1 rounded-md bg-stone-800 text-sky-100 font-bold">
                            {name}
                        </span>
                    </h2>
                    <p className="text-start my-3">
                        <strong>Features & Functionalities:</strong>
                        <li>{bullet1}</li>
                        <li>{bullet2}</li>
                        <li>{bullet3}</li>
                        <li>{bullet4}</li>
                        <li className="mb-2">{bullet5}</li>
                        <strong>Technology:</strong>
                        {technology}
                    </p>
                    <div className="card-actions">
                        <a
                            href={client}
                            className="inline-flex px-4 py-2 text-lg font-bold shadow-xl text-white bg-stone-800 hover:bg-sky-100 border-4 border-stone-800 hover:text-stone-800 rounded-md"
                        >
                            Client Side
                        </a>
                        {server && (
                            <a
                                href={server}
                                className="inline-flex px-4 py-2 text-lg font-bold shadow-xl text-white bg-stone-800 hover:bg-sky-100 border-4 border-stone-800 hover:text-stone-800 rounded-md"
                            >
                                Server Side
                            </a>
                        )}
                        <a
                            href={live}
                            className="inline-flex px-4 py-2 text-lg font-bold shadow-xl text-white bg-stone-800 hover:bg-sky-100 border-4 border-stone-800 hover:text-stone-800 rounded-md"
                        >
                            Live Website
                        </a>
                    </div>
                </div>
            </div>
        );
    }
};

export default ProjectDetail;
