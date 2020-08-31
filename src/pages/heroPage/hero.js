import React from 'react';
import './hero.css';

import Navbar from '../../shared/Navigation/Navbar';
import MobileNavBar from '../../shared/MobileNavBar/MobileNavBar'
import About from '../../components/HeroPage/About';
import Faq from '../../components/HeroPage/Faq';
import Speakers from '../../components/HeroPage/Speakers';
import Sponsors from '../../components/HeroPage/Sponsors';
import Copyright from '../../shared/Copyright/Copyright';

const hero = () => {
    return (
        <React.Fragment>
            <div className='hero-page'>
                <Navbar />
                <MobileNavBar />
                <About />
            </div>
            <Faq />
            <Speakers />
            <Sponsors />
            <Copyright />
        </React.Fragment>
    );
};

export default hero;
