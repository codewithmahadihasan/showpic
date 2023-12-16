import React from 'react';
import { Nav } from '../Components/Navber/Nav';
import Hero from '../Components/Hero/Hero';
import Feature from '../Components/Features/Feature';
import Team from '../Components/Team/Team';
import Testimonial from '../Components/Testimoial/Testimonial';
import Contact from '../Components/Contact/Contact';

const Home = () => {
    return (
        <div>
            <Hero />
            <Feature />
            <Team />
            <Testimonial />
            <Contact />
        </div>
    );
};

export default Home;