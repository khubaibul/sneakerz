import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Men from "../Pages/Men/Men";
import Collection from "../Pages/Women/Collection/Collection";
import Women from "../Pages/Women/Women";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Women />
            },
            {
                path: "/men",
                element: <Men />
            },
            {
                path: "/collection",
                element: <Collection />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
        ]
    }
])