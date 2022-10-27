import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* outlet navbar */}
            <Outlet></Outlet>
            <Footer></Footer>
          
        </div>
    );
};

export default Home;