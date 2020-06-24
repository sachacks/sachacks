import React, { useState } from 'react';
import './ResourcesCard.css';

import { GoTriangleDown } from 'react-icons/go';

const ResourcesCard = ( props ) => {
    const { topic, list } = props.content;

    const listContent = (
        list.map( item => <li>{ item }</li> )
    );

    const [ open, setOpen ] = useState( { open: true } );
    return (
        <div className='vert-content'>
            <div className='topic' onClick={ () => setOpen( !open ) }>
                <h4>{ topic }</h4><GoTriangleDown fill='white' size='20px' style={ !open ? { marginLeft: '10px', transform: 'rotate(180deg)', transition: '0.5s' } : { marginLeft: '10px', transition: '0.5s' } } />
            </div>
            <ul style={ !open ? { visibility: 'visible', animation: 'slideDown 0.5s ease-in-out' } : { visibility: 'hidden' } }>
                { listContent }
            </ul>
        </div>
    );
};

export default ResourcesCard;
