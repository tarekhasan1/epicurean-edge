import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Header from "../components/Header/Header";
import Chefs from "../components/Chefs/Chefs";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Blog from "../components/Blogs/Blog";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import chefsLoader from "../loaders/ChefsLoader";
import Recipes from "../components/Recipes/Recipes";
import recipesLoader from "../loaders/recipesLoader";
import PrivateRoute from "./PrivateRoute";
import CustomerTestimonials from "../components/CustomerTestimonials/CustomerTestimonials";
import ContactUs from "../components/ContactUs/ContactUs";
import UserProfile from "../components/UserProfile/UserProfile";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: chefsLoader
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
            },
            {
                path: '/recipes/:chefId',
                element: <PrivateRoute><Recipes></Recipes></PrivateRoute>,
                loader: recipesLoader
            },
            {
                path: '/testimonials',
                element: <CustomerTestimonials></CustomerTestimonials>
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/profile',
                element: <UserProfile></UserProfile>
            }
        ]
    }
])

export default router;