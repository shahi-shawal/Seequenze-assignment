import { Outlet } from "react-router-dom";
import DashboardNav from "../Components/Navbar/DashboardNav";


const Mainlayout = () => {
    return (
        <div>
            <DashboardNav></DashboardNav>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;