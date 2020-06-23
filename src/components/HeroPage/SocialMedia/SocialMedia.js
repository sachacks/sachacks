import React from 'react';
import './SocialMedia.css'

import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaMedium } from 'react-icons/fa';

const SocialMedia = () => {
    
    const openFacebook = () => {
        window.open('https://www.facebook.com/sachacks/')
    }

    const openLinkedin = () => {
        window.open('https://www.linkedin.com/company/sachacks/')
    }

    const openInsta = () => {
        window.open('https://www.instagram.com/sachacks/?hl=en')
    }

    const openTwitter = () => {
        window.open('https://twitter.com/sachacks2020?lang=en')
    }

    const openMedium = () => {
        window.open('https://medium.com/@SacHacks')
    }

    return (
        <div className='social-media'>
            <div className='media-button' onClick={openFacebook}><FaFacebook fill='white' size='35px' /></div>
            <div className='media-button' onClick={openLinkedin}><FaLinkedin fill='white' size='35px' /></div>
            <div className='media-button' onClick={openInsta}><FaInstagram fill='white' size='35px' /></div>
            <div className='media-button' onClick={openTwitter}><FaTwitter fill='white' size='35px' /></div>
            <div className='media-button' onClick={openMedium}><FaMedium fill='white' size='35px' /></div>
        </div>
    );
};

export default SocialMedia;


