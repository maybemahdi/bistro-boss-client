import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout"
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import Shop from "../Pages/Shop";

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
            },
            {
                path: "/shop",
                element: <Shop/>
            },
            // {
            //     path: "/shop/:category",
            //     element: <Shop/>
            // },
        ]
    }
])