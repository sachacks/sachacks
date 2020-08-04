import React, { useState } from 'react';
import './FaqCard.css';

import { GoTriangleDown } from 'react-icons/go';

const FaqCard = ( props ) => {
    const { q, a } = props.qa;

    const [ open, setOpen ] = useState( { open: true } );

    return (
        <div className='question'>
            <div className='ques' style={ !open ? { color: '#7BDDDE', transition: '0.5s' } : { color: '#fff', transition: '0.5s' } } onClick={ () => setOpen( !open ) }>
                { q } <GoTriangleDown fill='white' size='20px' style={ !open ? { marginLeft: '5px', transform: 'rotate(180deg)', transition: '0.5s' } : { marginLeft: '5px', transition: '0.5s' } } />
            </div>
            <div className='ans' style={ !open ? { animation: 'slideDown 0.5s ease-in' } : { display: 'none' } }>{ a }</div>
            <div className='line'></div>
        </div>
    );
};

export default FaqCard;
