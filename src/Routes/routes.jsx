import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Myprojects from "../Pages/MyProjects/Myprojects";


const routes =  createBrowserRouter([{
      
        path:"/",
        element:<Mainlayout></Mainlayout>,
        children:[{
            path:"/",
            element:<Myprojects></Myprojects>
        }]

    }])

export default routes;