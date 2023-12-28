import { Outlet } from "react-router-dom";
import DashboardNav from "../Components/Navbar/DashboardNav";
import Navbar from "../Components/Navbar/Navbar";


const Mainlayout = () => {
    return (
        <div>
            <DashboardNav></DashboardNav>
            <Navbar></Navbar>
            <div className="ml-[241px] px-[52px] py-[18px] bg-[#F8F8F8] min-h-screen">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Mainlayout;