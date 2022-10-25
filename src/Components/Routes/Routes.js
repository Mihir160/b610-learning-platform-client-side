import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../Errorpage/Errorpage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Navbar from "../Navbar/Navbar";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
             path:'/',
             element:<Header></Header>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
            
        ]
       
    }
])