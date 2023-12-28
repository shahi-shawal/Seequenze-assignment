import { NavLink } from "react-router-dom";
import "./Navbar.css"
import image1 from "../../assets/images/images (1).svg"
import image2 from "../../assets/images/images (2).svg"
import image3 from "../../assets/images/images (3).svg"
import image4 from "../../assets/images/images (4).svg"
import image5 from "../../assets/images/images (6).svg"
import image7 from "../../assets/images/images (7).svg"
import image8 from "../../assets/images/images (8).svg"
import image9 from "../../assets/images/images (9).svg"
import image6 from "../../assets/images/images (5).svg"
const DashboardNav = () => {
    return (
        <div>
         
              <div className="flex  lg:fixed">
        <div className="w-full lg:w-[241px] lg:min-h-screen ">
          <img src={image7} className=" mb-10 mt-5 mx-auto" alt="" />
          <hr className="w-40 mx-auto"></hr>
          <div className="flex justify-center items-center gap-5 ">
           
       
          <div className="">
            <ul className="flex flex-col gap-6 font-semibold text-gray-400 menu-horizontal mt-6">
             
                <NavLink to="/" >
                  <li ><a className="flex items-center gap-2 text-[16px]"><img src={image4} className="" alt="" /> My Projects</a></li>
                </NavLink>
               

              
                <NavLink to="simpleProjects" >
                <li><a className="flex items-center gap-2 text-[16px]"><img src={image5} alt="" /> Sample Projects</a></li>
                </NavLink>
                

                <hr></hr>

             
                <NavLink to="/apps" >
               <li><a className="flex items-center gap-2 text-[16px]"> <img src={image2} alt="" />Apps</a></li>
                </NavLink>
                <NavLink to="/intro" >
               <li><a className="flex items-center gap-2 text-[16px]"> <img src={image1} alt="" />Intro to Necleo </a></li>
                </NavLink>
              
                
              
                
                
              </ul>
              <ul className="flex flex-col gap-6 font-semibold text-gray-400 menu-horizontal mt-40">
         
               <NavLink to="/help">
                <li><a className="flex items-center gap-2 text-[16px]"  ><img src={image8} alt="" />Help & Support</a></li>
               </NavLink>
         
               <NavLink to="/feedback">
                <li><a className="flex items-center gap-2 text-[16px]"  ><img src={image9} alt="" />Feedback</a></li>
               </NavLink>
               <NavLink to="/collapse">
                <li><a className="flex items-center gap-2 text-[16px]"  ><img src={image3} alt="" />Collapse</a></li>
               </NavLink>
               
                
              </ul>
          </div>

  
        </div>
      </div>
        </div>
        </div>
    );
};

export default DashboardNav;