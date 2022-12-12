import React from "react";
import { Link } from "react-router-dom";
import Project1 from "../../assets/projects/trendyresale.png";
import Project2 from "../../assets/projects/codetutor.png";
import Project3 from "../../assets/projects/webcoding.png";

const Projects = () => {
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
                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src={Project1}
                                alt="Shoes"
                                className="rounded-xl"
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Trendy Resale</h2>
                            <p className="text-start my-3">
                                <strong>Features & Functionalities:</strong>
                                <li>
                                    A fully responsive website for reselling
                                    products
                                </li>
                                <li>
                                    Firebase Authentication System implemented
                                </li>
                                <li className="mb-2">
                                    Implementation of Stripe Payment Gateway
                                </li>
                                <strong>Technology:</strong> Tailwind, Daisy UI,
                                React.js, Firebase, MongoDB, Stripe, Vercel.
                            </p>
                            <div className="card-actions">
                                <a
                                    href="https://github.com/monabberhossain/trendy-resale-client"
                                    className="inline-flex px-4 py-2 text-lg font-bold shadow-xl text-white bg-stone-800 hover:bg-sky-100 border-4 border-stone-800 hover:text-stone-800 rounded-md"
                                >
                                    Client Side
                                </a>
                                <a
                                    href="https://github.com/monabberhossain/trendy-resale-server"
                                    className="inline-flex px-4 py-2 text-lg font-bold shadow-xl text-white bg-stone-800 hover:bg-sky-100 border-4 border-stone-800 hover:text-stone-800 rounded-md"
                                >
                                    Server Side
                                </a>
                                <a
                                    href="https://trendy-resale.web.app/"
                                    className="inline-flex px-4 py-2 text-lg font-bold shadow-xl text-white bg-stone-800 hover:bg-sky-100 border-4 border-stone-800 hover:text-stone-800 rounded-md"
                                >
                                    Live Website
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src={Project2}
                                alt="Shoes"
                                className="rounded-xl"
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Code Tutor</h2>
                            <p className="text-start my-3">
                                <strong>Features & Functionalities:</strong>
                                <li>
                                    A fully responsive website that contains
                                    programming courses
                                </li>
                                <li>
                                    Firebase Authentication System implemented
                                </li>
                                <li className="mb-2">
                                    Course Data is loaded from a custom API
                                </li>
                                <strong>Technology:</strong> Bootstrap, React
                                Bootstrap, React.js, Rest API, Firebase.
                            </p>
                            <div className="card-actions">
                                <a
                                    href="https://github.com/monabberhossain/code-tutor"
                                    className="inline-flex px-4 py-2 text-lg font-bold shadow-xl text-white bg-stone-800 hover:bg-sky-100 border-4 border-stone-800 hover:text-stone-800 rounded-md"
                                >
                                    Client Side
                                </a>
                                <a
                                    href="https://github.com/monabberhossain/code-tutor-server"
                                    className="inline-flex px-4 py-2 text-lg font-bold shadow-xl text-white bg-stone-800 hover:bg-sky-100 border-4 border-stone-800 hover:text-stone-800 rounded-md"
                                >
                                    Server Side
                                </a>
                                <a
                                    href="https://code-tutor-cfa0e.web.app/"
                                    className="inline-flex px-4 py-2 text-lg font-bold shadow-xl text-white bg-stone-800 hover:bg-sky-100 border-4 border-stone-800 hover:text-stone-800 rounded-md"
                                >
                                    Live Website
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src={Project3}
                                alt="Shoes"
                                className="rounded-xl"
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Web Coding</h2>
                            <p className="text-start my-3">
                                <strong>Features & Functionalities:</strong>
                                <li>A Fully Responsive & Dynamic Website</li>
                                <li>
                                    Several mathematical calculation implemented
                                </li>
                                <li className="mb-2">
                                    Accessing local storage to stored value at
                                    browser end.
                                </li>
                                <strong>Technology:</strong> Bootstrap,
                                Javascript.
                            </p>
                            <div className="card-actions">
                                <a
                                    href="https://github.com/monabberhossain/web-coding"
                                    className="inline-flex px-4 py-2 text-lg font-bold shadow-xl text-white bg-stone-800 hover:bg-sky-100 border-4 border-stone-800 hover:text-stone-800 rounded-md"
                                >
                                    Github Source Code
                                </a>
                                <a
                                    href="https://cerulean-trifle-f4032d.netlify.app/"
                                    className="inline-flex px-4 py-2 text-lg font-bold shadow-xl text-white bg-stone-800 hover:bg-sky-100 border-4 border-stone-800 hover:text-stone-800 rounded-md"
                                >
                                    Live Website
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
