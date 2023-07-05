import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/block/Layout";
import View from "../pages/View";
import Error from "../error/Error";

export const mainRoute = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <View/>
            },
            {
                path: '/*',
                element: <Error/>
            }
        ]
    }
])