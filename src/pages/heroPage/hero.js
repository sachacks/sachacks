import React from 'react';
import './hero.css';

import Navbar from '../../shared/Navigation/Navbar';
import About from '../../components/HeroPage/About';
import Faq from '../../components/HeroPage/Faq';
import Sponsors from '../../components/HeroPage/Sponsors'
import Copyright from '../../shared/Copyright/Copyright';

const hero = () => {
    return (
        <React.Fragment>
            <div className='hero-page'>
                <Navbar />
                <About />
            </div>
            <Faq />
            <Sponsors />
            <Copyright />
        </React.Fragment>
    );
};

export default hero;
