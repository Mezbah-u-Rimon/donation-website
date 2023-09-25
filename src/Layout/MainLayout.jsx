import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;