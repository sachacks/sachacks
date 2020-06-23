import React from 'react';
import './hero.css';

import Navbar from '../../shared/Navigation/Navbar';
import About from '../../components/HeroPage/About';
import Copyright from '../../shared/Copyright/Copyright'

const hero = () => {
    return (
        <div className='hero-page'>
            <Navbar />
            <About />
            <Copyright />
        </div>
    );
};

export default hero;
