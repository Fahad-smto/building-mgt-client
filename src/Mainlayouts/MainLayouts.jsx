import { Outlet } from "react-router";
import NavBar from "../Pages/NavBar";
import Footer from "../Pages/Footer";



const MainLayouts = () => {
    return (
        <div className=" mx-auto bg-blue-100 min-h-screen">

            <NavBar></NavBar>

            <div className="min-h-[calc(100vh-362px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default MainLayouts;