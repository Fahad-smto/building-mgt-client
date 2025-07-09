import { Outlet } from "react-router";
import NavBar from "../Pages/NavBar";
import Footer from "../Pages/Footer";



const MainLayouts = () => {
    return (
        <div className="max-w-6xl mx-auto ">

            <NavBar></NavBar>

            <div className="min-h-[calc(100vh-289px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default MainLayouts;