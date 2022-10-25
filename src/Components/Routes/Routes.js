import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>,
       
    }
])