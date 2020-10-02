/**
 * Back drop, use when the user click the apply button. Back drop will fall down and dim the background
 */

import React from 'react';
import './Backdrop.css';

const Backdrop = ( props ) => {
    return (
        <div className='backdrop' onClick={ props.toggle }>

        </div>
    );
};

export default Backdrop;
