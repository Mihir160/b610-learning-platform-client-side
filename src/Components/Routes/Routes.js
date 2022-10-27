import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Checkout from "../Checkout/Checkout";
import Courses from "../Courses/Courses";
import ParticulaCourseDeatails from "../Courses/ParticulaCourseDeatails";

import Errorpage from "../Errorpage/Errorpage";
import FAQs from "../FAQs/FAQs";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Login from "../Login/Login";
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
                loader:  () => fetch ('https://b610-lerning-platform-server-side-gamma.vercel.app/courses')
            },
            {
                path:'/course/:id',
                element:<ParticulaCourseDeatails></ParticulaCourseDeatails>,
                loader: ({params}) => fetch(`https://b610-lerning-platform-server-side-gamma.vercel.app/course/${params.id}`)
            },
            {
                path:'/checkout/:id',
                element:<PrivateRoutes><Checkout></Checkout></PrivateRoutes>,
                loader: ({params}) => fetch(`https://b610-lerning-platform-server-side-gamma.vercel.app/course/${params.id}`)
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/faqs',
                element:<FAQs></FAQs>
            }
            
        ]
       
    }
])