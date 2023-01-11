import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Women from "../Pages/Women/Women";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Women />
            }
        ]
    }
])