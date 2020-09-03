import React from 'react';
import './Sponsor.css';

const Sponsor = ( props ) => {
    const { link, alt } = props.img;
    return (
        <div className='sp-elem'>
            <img src={ link } alt={ alt } />
        </div>
    );
};

export default Sponsor;
