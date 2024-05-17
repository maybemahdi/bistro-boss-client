import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout"
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/menu",
                element: <Menu/>
            }
        ]
    }
])