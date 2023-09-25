import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import Banner from "../Components/Header/Banner/Banner";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="max-w-6xl mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;