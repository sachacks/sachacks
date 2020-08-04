import React from 'react';
import './Speakers.css';

import Speaker from './Speaker/Speaker'

const Speakers = props => {
    return (
        <div className='speakers'>
            <h1>Speakers Panel</h1>
            <div className='row'>
                <Speaker />
                <Speaker />
                <Speaker />
                <Speaker />
            </div>
            <div className='row'>
                <Speaker />
                <Speaker />
                <Speaker />
                <Speaker />
            </div>
        </div>
    );
};

export default Speakers;
