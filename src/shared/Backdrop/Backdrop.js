import React from 'react';
import './Backdrop.css';

const Backdrop = ( props ) => {
    return (
        <div className='backdrop' onClick={ props.toggle }>

        </div>
    );
};

export default Backdrop;
