import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { GoTriangleDown } from 'react-icons/go';

const Navbar = () => {
    return (
        <div className='nav'>
            <Link className='logo' to='/'></Link>
            <div className='space-between'></div>
            <Link className='schedule' to='/schedule'>Schedule </Link>
            <Link to='/resources'>Resources</Link>
            <a href='mailto: team@sachacks.io'>Contact</a>
            <Link className='apply' to='/apply'>Apply <GoTriangleDown fill='white' size='20px' style={{marginLeft: '5px'}} /></Link>
            <div className='space'></div>
        </div>
    );
};

export default Navbar;
