
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import AboutMe from "../pages/AboutMe/AboutMe";
import ContactMe from "../pages/ContactMe/ContactMe";
import Home from "../pages/Home/Home/Home";
import Projects from "../pages/Projects/Projects";
import Skills from "../pages/Skills/Skills";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/skills",
                element: <Skills></Skills>,
            },
            {
                path: "/projects",
                element: <Projects></Projects>,
            },
            {
                path: "/about",
                element: <AboutMe></AboutMe>,
            },
            {
                path: "/contact",
                element: <ContactMe></ContactMe>,
            },
        ],
    },
]);

export default router;
