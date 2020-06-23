import React from 'react';
import './SocialMedia.css'

import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className='social-media'>
            <div className='media-button'><FaFacebook fill='white' size='35px' /></div>
            <div className='media-button'><FaLinkedin fill='white' size='35px' /></div>
            <div className='media-button'><FaInstagram fill='white' size='35px' /></div>
            <div className='media-button'><FaTwitter fill='white' size='35px' /></div>
            <div className='media-button'></div>
        </div>
    );
};

export default SocialMedia;


