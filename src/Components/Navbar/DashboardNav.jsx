import { NavLink } from "react-router-dom";
import image1 from "../../assets/images/images (1).svg"
const DashboardNav = () => {
    return (
        <div>
              <div className="flex  lg:fixed">
        <div className="w-full lg:w-[241px] lg:min-h-screen px-2 bg-gray-100">
          <img src="" className=" mb-5 mt-5 mx-auto" alt="" />
          <div className="flex justify-center items-center gap-5">
            <div>
                
          </div>
          <div className="text-start px-4">
            <ul className="menu flex flex-col gap-4 font-semibold menu-horizontal mt-6 gap-1">
              <li className="">
                <NavLink to="/" className="flex items-center gap-2">
                  <img src={image1} alt="" /> Home
                </NavLink>
                </li>
              <li className="">
                <NavLink to="everything" className="flex items-center gap-2">
                <img src={image1} alt="" /> Everything
                </NavLink>
                </li>
              <li className="">
                <NavLink to="createtask" className="flex items-center gap-2">
                <img src={image1} alt="" />Create Task
                </NavLink>
                </li>
              <li className="">
                <NavLink to="previoustask" className="flex items-center gap-2">
                <img src={image1} alt="" />Previous Task
                </NavLink>
                </li>

                <hr></hr>

                <li className="">
                  <button className="flex items-center gap-2"  > <img src={image1} alt="" />Logout</button>
          
                </li>


              </ul>
          </div>

  
        </div>
      </div>
        </div>
        </div>
    );
};

export default DashboardNav;