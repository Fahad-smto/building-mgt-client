import { createBrowserRouter } from "react-router";
import MainLayouts from "../Mainlayouts/MainLayouts";
import Home from "../Pages/Home";
import Loading from "../Components/Loading";
import Apartment from "../Pages/Apartment";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import DashBoards from "../dashboards/DashBoards";
import MyProfile from "../Mainlayouts/MyProfile";


export const router = createBrowserRouter([
    {

        path: '/',
        element: <MainLayouts></MainLayouts>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                Component: Home,
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: 'apartment',
                Component: Apartment,
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/login',
                element: <Login></Login>

            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/about',
                element: <About></About>,
            },
            {
                path: '/contact',
                element: <Contact></Contact>,
            },

        ]
    },
    {
        path: '/dashboard',
        element: <DashBoards></DashBoards>,
        children: [
            {
                path: 'my_profile',
                element: <MyProfile></MyProfile>
            },
        ]
    }

]);