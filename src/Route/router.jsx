import { createBrowserRouter } from "react-router";
import MainLayouts from "../Mainlayouts/MainLayouts";
import Home from "../Pages/Home";
import Loading from "../Components/Loading";
import Apartment from "../Pages/Apartment";
 

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
            },
            {
                path:'apartment',
                Component:Apartment,
                hydrateFallbackElement:<Loading></Loading>
            }
        ]

    }
]);