import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Header from "../components/Header/Header";
import Chefs from "../components/Chefs/Chefs";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Blog from "../components/Blogs/Blog";
import Home from "../components/Home/Home";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default router;