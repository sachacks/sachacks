/**
 * This is a sub-component of the Speaker section - display info of each speaker
 */

import React from 'react';
import './Speaker.css';

const Speaker = () => {
    return (
        <div className='elem'>
            <div className='elem-pic'></div>
            <div className='elem-name'>Name</div>
            <div className='elem-title'>Title</div>
        </div>
    );
};

export default Speaker;
