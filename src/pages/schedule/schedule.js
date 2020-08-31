import React from 'react';
import './schedule.css';

import Navbar from '../../shared/Navigation/Navbar';
import Copyright from '../../shared/Copyright/Copyright';
import MobileNavBar from '../../shared/MobileNavBar/MobileNavBar';

const schedule = () => {
    return (
        <React.Fragment>
            <div className='schedule-page'>
                <Navbar />
                <MobileNavBar />
                <div className='schedule-map'>
                    <div className='sche-side'>
                        <h1>Schedule</h1>
                        <div className='sche-date'>
                            <div className='first-day'>
                                <div className='day active'>Sat. Feb, 22</div>
                            </div>
                            <div className='second-day'>
                            <div className='day'>Sun. Feb, 23</div>
                            </div>
                        </div>
                        <div className='events'>
                            <ul className='event-ul'>
                                <li className='event event-active'>
                                    <span className='time'>8:00AM</span>
                                    <span className='todo'>Check-In</span>
                                    <span className='detail'>Sign-In at the main entrance of the something center</span>
                                </li>
                                <li className='event'>
                                    <span className='time'>9:00AM</span>
                                    <span className='todo'>Opening Ceremony</span>
                                    <span className='detail'>Do whatever you want</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='map-side'>
                        <h1>Map</h1>
                        <div className='map-container'>Something here</div>
                    </div>
                </div>
            </div>
            <Copyright />
        </React.Fragment>
    );
};

export default schedule;
