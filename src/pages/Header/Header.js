import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="navbar bg-stone-800 text-white font-bold">
            <div className="w-[100%] lg:w-[84%] mx-auto">
                <div className="navbar-start">
                    <Link className="normal-case text-xl hover:bg-sky-100 hover:text-stone-800 hover:p-3 hover:rounded-md" to="/">
                        Monabber Hossain
                    </Link>
                </div>
                <div className="navbar-end">
                    <div className="dropdown flex justify-end">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-14 p-2 shadow bg-stone-800 rounded-md w-full"
                        >
                            <li className="my-1 py-1 rounded-md border border-sky-100 hover:bg-sky-100 hover:text-stone-800">
                                <Link
                                    className="hover:bg-sky-100 hover:text-stone-800"
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="my-1 py-1 rounded-md border border-sky-100 hover:bg-sky-100">
                                <Link
                                    className="hover:bg-sky-100 hover:text-stone-800"
                                    to="/skills"
                                >
                                    Skills
                                </Link>
                            </li>
                            <li className="my-1 py-1 rounded-md border border-sky-100 hover:bg-sky-100">
                                <Link
                                    className="hover:bg-sky-100 hover:text-stone-800"
                                    to="/projects"
                                >
                                    Projects
                                </Link>
                            </li>
                            <li className="my-1 py-1 rounded-md border border-sky-100 hover:bg-sky-100">
                                <Link
                                    className="hover:bg-sky-100 hover:text-stone-800"
                                    to="/about"
                                >
                                    About Me
                                </Link>
                            </li>
                            <li className="my-1 py-1 rounded-md border border-sky-100 hover:bg-sky-100">
                                <Link
                                    className="hover:bg-sky-100 hover:text-stone-800"
                                    to="/contact"
                                >
                                    Contact Me
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="my-2 rounded-md hover:bg-sky-100 hover:text-stone-800">
                            <Link
                                className="hover:bg-sky-100 hover:text-stone-800"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="my-2 rounded-md hover:bg-sky-100">
                            <Link
                                className="hover:bg-sky-100 hover:text-stone-800"
                                to="/skills"
                            >
                                Skills
                            </Link>
                        </li>
                        <li className="my-2 rounded-md hover:bg-sky-100">
                            <Link
                                className="hover:bg-sky-100 hover:text-stone-800"
                                to="/projects"
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="my-2 rounded-md hover:bg-sky-100">
                            <Link
                                className="hover:bg-sky-100 hover:text-stone-800"
                                to="/about"
                            >
                                About Me
                            </Link>
                        </li>
                        <li className="my-2 rounded-md hover:bg-sky-100">
                            <Link
                                className="hover:bg-sky-100 hover:text-stone-800"
                                to="/contact"
                            >
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
