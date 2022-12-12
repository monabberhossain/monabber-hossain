import React from 'react';
import { FaBootstrap, FaCss3, FaFigma, FaGit, FaHtml5, FaJava, FaJsSquare, FaNodeJs, FaReact, FaStripe } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Tailwind from "../../assets/skills/tailwind.png"

const Skills = () => {
    return (
        <div className="bg-sky-100 px-4 py-12 md:py-16 lg:py-20">
            <div className="w-[100%] lg:w-[84%] mx-auto">
                <h1 className="text-4xl font-bold leading-loose">My Skills</h1>
                <hr className="border-2 border-stone-800" />
                <p className="mt-4 text-xl font-semibold text-stone-800">
                    Main area of my expertise is both front-end & back-end web
                    development.
                    <br />I feel very comfortable in React.js. These are my top
                    skills that I have learned since last year.
                </p>
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                    <Link className="bg-white rounded-md text-center p-8">
                        <div className="flex justify-center items-center">
                            <FaJsSquare className="text-4xl md:text-6xl lg:text-8xl"></FaJsSquare>
                        </div>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                            JavaScript
                        </h2>
                    </Link>
                    <Link className="bg-white rounded-md text-center p-8">
                        <div className="flex justify-center items-center">
                            <FaHtml5 className="text-4xl md:text-6xl lg:text-8xl"></FaHtml5>
                        </div>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                            HTML5
                        </h2>
                    </Link>
                    <Link className="bg-white rounded-md text-center p-8">
                        <div className="flex justify-center items-center">
                            <FaCss3 className="text-4xl md:text-6xl lg:text-8xl"></FaCss3>
                        </div>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                            CSS3
                        </h2>
                    </Link>
                    <Link className="bg-white rounded-md text-center p-8">
                        <div className="flex justify-center items-center">
                            <FaBootstrap className="text-4xl md:text-6xl lg:text-8xl"></FaBootstrap>
                        </div>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                            Bootstrap
                        </h2>
                    </Link>
                    <Link className="bg-white rounded-md text-center p-8">
                        <div className="flex justify-center items-center">
                            <FaNodeJs className="text-4xl md:text-6xl lg:text-8xl"></FaNodeJs>
                        </div>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                            Node.js
                        </h2>
                    </Link>

                    <Link className="bg-white rounded-md text-center p-8">
                        <div className="flex justify-center items-center">
                            <FaReact className="text-4xl md:text-6xl lg:text-8xl"></FaReact>
                        </div>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                            React.js
                        </h2>
                    </Link>

                    <Link className="bg-white rounded-md text-center p-8">
                        <div className="flex justify-center items-center">
                            <FaJava className="text-4xl md:text-6xl lg:text-8xl"></FaJava>
                        </div>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                            Java
                        </h2>
                    </Link>

                    <Link className="bg-white rounded-md text-center p-8">
                        <div className="flex justify-center items-center">
                            <FaStripe className="text-4xl md:text-6xl lg:text-8xl"></FaStripe>
                        </div>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                            Stripe
                        </h2>
                    </Link>

                    <Link className="bg-white rounded-md text-center p-8">
                        <div className="flex justify-center items-center">
                            <FaGit className="text-4xl md:text-6xl lg:text-8xl"></FaGit>
                        </div>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                            Git
                        </h2>
                    </Link>

                    <Link className="bg-white rounded-md text-center p-8">
                        <div className="flex justify-center items-center">
                            <FaFigma className="text-4xl md:text-6xl lg:text-8xl"></FaFigma>
                        </div>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                            Figma
                        </h2>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Skills;