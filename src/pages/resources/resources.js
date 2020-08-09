import React from 'react';
import './resources.css';

import Navbar from '../../shared/Navigation/Navbar';
import Copyright from '../../shared/Copyright/Copyright';
import ResourcesCard from '../../components/ResourcesPage/ResourcesCard';

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
                    <div className='resources-main'>
                        <h1>Resources</h1>
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