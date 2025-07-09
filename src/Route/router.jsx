import { createBrowserRouter } from "react-router";
import MainLayouts from "../Mainlayouts/MainLayouts";
import Home from "../Pages/Home";
import Loading from "../Components/Loading";
 

export const router = createBrowserRouter([
    {

        path:'/',
        element:<MainLayouts></MainLayouts>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                Component:Home,
                hydrateFallbackElement:<Loading></Loading>
            }
        ]

    }
]);