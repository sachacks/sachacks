import React, { useState } from 'react';
import './MobileNavBar.css';

import { GiHamburgerMenu } from 'react-icons/gi';
import { GoTriangleDown } from 'react-icons/go';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';

const MobileNavBar = () => {

    const [ open, setOpen ] = useState( { open: true } );
    const [ clicked, setClicked ] = useState( { click: true } );

    return (
        <React.Fragment>
            <div className='mobile-nav'>
                <div className='hamburger-icon' onClick={ () => setClicked( !clicked ) } style={ clicked ? { transform: 'rotate(180deg)', transition: '0.5s' } : { transform: 'rotate(180deg)', transition: '0.5s' } }>
                    { clicked ? <GiHamburgerMenu size={ 30 } fill='white' /> : <MdClose size={ 30 } fill='white' /> }
                </div>
                <div className='mobile-logo'>
                    <Link to='/'><img src='/rocket.png' alt='SacHacks Mobile Logo' /></Link>
                </div>
                <div className='mobile-apply' onClick={ () => setOpen( !open ) } style={ !open ? { color: '#7BDDDE', transition: '0.5s' } : { color: '#fff', transition: '0.5s' } }>
                    Apply <GoTriangleDown fill={ !open ? '#7BDDDE' : 'white' } size='20px' style={ !open ? { marginLeft: '5px', transform: 'rotate(180deg)', transition: '0.5s' } : { marginLeft: '5px', transition: '0.5s' } } />
                </div>
            </div>

            {/* Apply Icon */ }
            <div className='mobile-hacker' style={ open ? { transform: 'translateY(-100px)', transition: '0.5s ease-in-out', opacity: '0' } : { transform: 'translateY(100px)', transition: '0.5s ease-in-out', opacity: '1' } }>
                <img src='/black-hacker-icon.png' alt='mobile hacker icon' /> <a href='https://sachacks.typeform.com/to/r2sYTJ' target='_blank' rel="noopener noreferrer">Team</a>
            </div>
            {/* <div className='mobile-mentor' style={ open ? { transform: 'translateY(-200px)', transition: '0.5s ease-in-out', opacity: '0' } : { transform: 'translateY(183px)', transition: '0.5s ease-in-out', opacity: '1' } }>
                <img src='/black-mentor-icon.png' alt='mobile hacker icon' /> Mentor
            </div> */}
            {/* <div className='mobile-sponsor' style={ open ? { transform: 'translateY(-300px)', transition: '0.5s ease-in-out', opacity: '0' } : { transform: 'translateY(286px)', transition: '0.5s ease-in-out', opacity: '1' } }> */}
            <div className='mobile-sponsor' style={ open ? { transform: 'translateY(-300px)', transition: '0.5s ease-in-out', opacity: '0' } : { transform: 'translateY(202px)', transition: '0.5s ease-in-out', opacity: '1' } }>
                <img src='/black-sponsor-icon.png' alt='mobile hacker icon' /> Sponsor
            </div>

            {/* Menu Icon */ }
            {/* <div className='mobile-schedule' style={ clicked ? { transform: 'translateY(-100px)', transition: '0.5s ease-in-out', opacity: '0' } : { transform: 'translateY(80px)', transition: '0.5s ease-in-out', opacity: '1' } }>
                <Link to='/schedule'>Schedule</Link>
            </div>
            <div className='mobile-resources' style={ clicked ? { transform: 'translateY(-200px)', transition: '0.5s ease-in-out', opacity: '0' } : { transform: 'translateY(183px)', transition: '0.5s ease-in-out', opacity: '1' } }>
                <Link to='/resources'>Resources</Link>
            </div> */}
            {/* <div className='mobile-contact' style={ clicked ? { transform: 'translateY(-300px)', transition: '0.5s ease-in-out', opacity: '0' } : { transform: 'translateY(286px)', transition: '0.5s ease-in-out', opacity: '1' } }> */}
            <div className='mobile-contact' style={ clicked ? { transform: 'translateY(-300px)', transition: '0.5s ease-in-out', opacity: '0' } : { transform: 'translateY(100px)', transition: '0.5s ease-in-out', opacity: '1' } }>
                <a href='mailto: team@sachacks.io'>Contact</a>
            </div>
        </React.Fragment>
    );
};

export default MobileNavBar;
