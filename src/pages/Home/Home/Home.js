import React from 'react';
import { Link } from 'react-router-dom';
import Photo from "../../../assets/profile.jpg";
import Resume from "../../../assets/Resume.pdf";
import { FaDownload, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Home = () => {
    return (
        <div className="bg-sky-100 px-4 py-12 md:py-16 lg:py-20 h-screen">
            <div className="w-[100%] lg:w-[84%] mx-auto flex justify-center justify-items-center">
                <div className="text-center">
                    <div className="mb-4">
                        <img
                            className="w-[60%] md:w-[40%] lg:w-[15%] mx-auto rounded-xl p-1 border-4 lg:border-8 border-stone-800"
                            src={Photo}
                            alt=""
                        />
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-4xl font-semibold leading-loose">
                            I Am,{" "}
                            <span className="text-3xl md:text-5xl text-slate-700 font-extrabold">
                                Monabber Hossain
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl lg:leading-loose tracking-normal md:tracking-wide lg:tracking-wider font-semibold">
                            Full-Stack React.js Web Developer
                        </p>
                        <p className="text-xl md:text-2xl lg:leading-loose tracking-normal md:tracking-wide lg:tracking-wider font-semibold">
                            A Developer Who Loves To Build Creative Things.
                        </p>
                    </div>
                    <div className="mt-8 flex justify-center justify-items-center">
                        <a
                            href="https://github.com/monabberhossain"
                            className="mx-2 p-1 text-2xl shadow-xl text-white bg-stone-800 hover:bg-sky-100 border-2 border-stone-800 hover:text-stone-800 rounded-md"
                        >
                            <FaGithub></FaGithub>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/monabberhossain/"
                            className="mx-2 p-1 text-2xl shadow-xl text-white bg-stone-800 hover:bg-sky-100 border-2 border-stone-800 hover:text-stone-800 rounded-md"
                        >
                            <FaLinkedin></FaLinkedin>
                        </a>
                        <a
                            href="https://twitter.com/HossainMonabber"
                            className="mx-2 p-1 text-2xl shadow-xl text-white bg-stone-800 hover:bg-sky-100 border-2 border-stone-800 hover:text-stone-800 rounded-md"
                        >
                            <FaTwitter></FaTwitter>
                        </a>
                        <a
                            href="https://www.facebook.com/monabber.hossain/"
                            className="mx-2 p-1 text-2xl shadow-xl text-white bg-stone-800 hover:bg-sky-100 border-2 border-stone-800 hover:text-stone-800 rounded-md"
                        >
                            <FaFacebook></FaFacebook>
                        </a>
                        <a
                            href="https://www.instagram.com/monabbermunai/"
                            className="mx-2 p-1 text-2xl shadow-xl text-white bg-stone-800 hover:bg-sky-100 border-2 border-stone-800 hover:text-stone-800 rounded-md"
                        >
                            <FaInstagram></FaInstagram>
                        </a>
                    </div>
                    <div className="mt-12">
                        <a
                            href={Resume}
                            download={Resume}
                            className="inline-flex px-4 py-2 text-xl font-bold shadow-xl text-white bg-stone-800 hover:bg-sky-100 border-4 border-stone-800 hover:text-stone-800 rounded-md"
                        >
                            Download Resume
                            <FaDownload className="ml-2 mt-1"></FaDownload>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;