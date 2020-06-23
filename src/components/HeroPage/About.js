import React from 'react';
import './About.css';

import SocialMedia from './SocialMedia/SocialMedia';

const About = () => {
    return (
        <div className='about'>
            <h1 className='sachacks'>Sachacks</h1>
            <h2 className='motto'>
                <span className='red'>Design.</span>
                <span className='green'>Code.</span>
                <span className='blue'>Launch.</span>
            </h2>
            <p className='description'>SacHacks is the first major intercollegiate hackathon in the Sacramento, California area. Our passion is to cultivate the untapped potential of those in Sac by launching their ideas into action during a 24-hour hackathon. </p>
            <div className='map-buttons'>
                <div className='map-button'>Google Maps</div>
                <div className='map-button'>Apple Maps</div>
            </div>
            <SocialMedia />
        </div>
    );
};

export default About;
