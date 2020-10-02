/**
 * This is the guest speaker section
 * Add more speaker by utilizing <Speaker /> element
 */

import React from 'react';
import './Speakers.css';

// Import more components here
import Speaker from './Speaker/Speaker'

const Speakers = props => {
    return (
        <div className='speakers'>
            <h1>Speakers Panel</h1>
            <div className='row'>
                <div className='sub-row'>
                    <Speaker />
                    <Speaker />
                </div>
                <div className='sub-row'>
                    <Speaker />
                    <Speaker />
                </div>
            </div>
            <div className='row'>
                <div className='sub-row'>
                    <Speaker />
                    <Speaker />
                </div>
                <div className='sub-row'>
                    <Speaker />
                    <Speaker />
                </div>
            </div>
            <div className='space-bottom'></div>
        </div>
    );
};

export default Speakers;
