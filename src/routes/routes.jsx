import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Header from "../components/Header/Header";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/header',
                element: <Header></Header>
            }
        ]
    }
])

export default router;