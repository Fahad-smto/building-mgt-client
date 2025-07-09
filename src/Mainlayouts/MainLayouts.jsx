import { Outlet } from "react-router";
import NavBar from "../Pages/NavBar";
import Footer from "../Pages/Footer";

 

const MainLayouts = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;