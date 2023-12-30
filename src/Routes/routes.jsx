import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Myprojects from "../Pages/MyProjects/Myprojects";
import SampleProject from "../Pages/SampleProject/SampleProject";
import CreateProjects from "../Pages/MyProjects/CreateProjects";


const routes =  createBrowserRouter([{
      
        path:"/",
        element:<Mainlayout></Mainlayout>,
        children:[{
            path:"/",
            element:<Myprojects></Myprojects>
        },
        {
            path:"/sampleProjects",
            element:<SampleProject></SampleProject>
        },
        {
            path:"/createProjects",
            element:<CreateProjects></CreateProjects>
        }
    
    
    
    ]

    }])

export default routes;