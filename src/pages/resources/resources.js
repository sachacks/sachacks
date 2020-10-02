/**
 * This is the resources page where hackers come to look for basic info
 * such as: Tracks, How to submit the project, some API available, etc.
 * 
 * We separate the components into four main comp:
 * 1. Hardware & API
 * 2. Prizes
 * 3. Submissions
 * 4. Tracks
 * 
 * Since they all have the same format - we can take advantage of React to create a reusable card
 * If you would like to makes any changes, please go to this file
 * - ResourcesCard -> sachacks/src/components/ResourcesPage/ResourcesCard.js
 */

import React from 'react';
import './resources.css';

// Import components for this page here
import Navbar from '../../shared/Navigation/Navbar';
import Copyright from '../../shared/Copyright/Copyright';
import ResourcesCard from '../../components/ResourcesPage/ResourcesCard';
import MobileNavBar from '../../shared/MobileNavBar/MobileNavBar';

const resources = () => {
    const content1 = {
        topic: 'Hardware & API',
        list: [ 'idk', 'idk', 'idk', 'idk', 'idk' ]
    };
    const content2 = {
        topic: 'Prizes',
        list: [ 'idk', 'idk', 'idk', 'idk', 'idk' ]
    };
    const content3 = {
        topic: 'Submissions',
        list: [ 'idk', 'idk', 'idk', 'idk', 'idk' ]
    };
    const content4 = {
        topic: 'Tracks',
        list: [ 'idk', 'idk', 'idk', 'idk', 'idk' ]
    };

    return (
        <React.Fragment>
            <div className='resources-page'>
                <div className='shadow-cover'>
                    <Navbar />
                    <MobileNavBar />
                    <div className='resources-main'>
                        <h1 className='resources-header'>Resources</h1>
                        <div className='resources-content'>
                            <div className='horz-content'>
                                <ResourcesCard content={ content1 } />
                                <ResourcesCard content={ content2 } />
                            </div>
                            <div className='horz-content'>
                                <ResourcesCard content={ content3 } />
                                <ResourcesCard content={ content4 } />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Copyright />
        </React.Fragment>
    );
};

export default resources;