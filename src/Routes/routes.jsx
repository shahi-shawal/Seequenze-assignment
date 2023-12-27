import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";


const routes =  createBrowserRouter([{
      
        path:"/",
        element:<Mainlayout></Mainlayout>

    }])

export default routes;