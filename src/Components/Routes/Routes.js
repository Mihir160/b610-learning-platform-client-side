import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Checkout from "../Checkout/Checkout";
import CourseCard from "../Courses/CourseCard";
import Courses from "../Courses/Courses";
import ParticulaCourseDeatails from "../Courses/ParticulaCourseDeatails";

import Errorpage from "../Errorpage/Errorpage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Navbar from "../Navbar/Navbar";
import Register from "../Register/Register";
import PrivateRoutes from "./PrivateRoutes";

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
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/courses',
                element:<Courses></Courses>,
                loader:  () => fetch ('http://localhost:5000/courses')
            },
            {
                path:'/course/:id',
                element:<ParticulaCourseDeatails></ParticulaCourseDeatails>,
                loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path:'/checkout/:id',
                element:<PrivateRoutes><Checkout></Checkout></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
            
        ]
       
    }
])