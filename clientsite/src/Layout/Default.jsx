import React from 'react';
import { Nav } from '../Components/Navber/Nav';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Components/Footer/Footer';

const Default = () => {
    return (
        <div>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Default;