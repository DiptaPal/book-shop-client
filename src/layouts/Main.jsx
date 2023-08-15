import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";
import SubNavbar from "../components/SubNavbar/SubNavbar";

const Main = () => {
    return (
        <div>
            <SubNavbar></SubNavbar>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;