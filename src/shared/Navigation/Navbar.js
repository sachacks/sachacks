import React, { useState } from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';
import { GoTriangleDown } from 'react-icons/go';
import Apply from '../Apply/Apply';

const Navbar = () => {

    const [ open, setOpen ] = useState( { open: true } );
    const backdropToggler = () => {
        setOpen( !open );
    };

    return (
        <React.Fragment>
            <div className='nav'>
                <Link className='logo' to='/'></Link>
                <div className='space-between'></div>
                <Link className='schedule' to='/schedule'>Schedule</Link>
                <Link to='/resources'>Resources</Link>
                <a href='mailto: team@sachacks.io'>Contact</a>
                <div className='apply' onClick={ () => setOpen( !open ) } style={ !open ? { color: '#7BDDDE', transition: '0.5s' } : { color: '#fff', transition: '0.5s' } }>
                    Apply <GoTriangleDown fill={ !open ? '#7BDDDE' : 'white' } size='20px' style={ !open ? { marginLeft: '5px', transform: 'rotate(180deg)', transition: '0.5s' } : { marginLeft: '5px', transition: '0.5s' } } />
                </div>
                <div className='space'></div>
            </div>
            <Apply show={ !open } toggle={ backdropToggler } />
        </React.Fragment>
    );
};

export default Navbar;
