import React from 'react';
import './Sponsor.css';

const Sponsor = ( props ) => {
    const { img, alt, link } = props.img;
    return (
        <div className={`sp-elem ${alt}`}>
            <a href={ link } target='_blank' rel="noopener noreferrer" ><img src={ img } alt={ alt } /></a>
        </div>
    );
};

export default Sponsor;
