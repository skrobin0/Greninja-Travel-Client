import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Menubar from '../../Shared/Menubar/Menubar';
import Details from '../../Tour Details/Details/Details';
import Achievement from '../Achievement/Achievement';
import Hero from '../Hero-Area/Hero';

const Home = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Hero></Hero>
            <Details></Details>
            <Achievement></Achievement>
            <Footer></Footer>
        </div>
    );
};

export default Home;