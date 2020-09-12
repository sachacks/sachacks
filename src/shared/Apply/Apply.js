import React from 'react';
import './Apply.css';
import Backdrop from '../Backdrop/Backdrop';

const Apply = ( props ) => {

    let name = 'apply-section';
    let backdrop = null;

    if ( props.show ) {
        name = 'apply-section ap-active';
        backdrop = <Backdrop toggle={props.toggle} />;
    } else {
        name = 'apply-section';
        backdrop = null;
    }

    return (
        <React.Fragment>
            <div className={ name }>
                <div className='icon' id='hacker'>
                    <img src='/navigation/Hacker-Icon.png' alt='hacker icon' />
                    <p className='icon-name'><a href='https://sachacks.typeform.com/to/r2sYTJ' target='_blank' rel="noopener noreferrer">Team</a></p>
                </div>
                {/* <div className='icon' id='mentor'>
                    <img src='/navigation/Mentor-Icon.png' alt='mentor icon' />
                    <p className='icon-name'>Mentor</p>
                </div> */}
                <div className='icon' id='sponsor'>
                    <img src='/navigation/Sponsor-Icon.png' alt='sponsor icon' />
                    <p className='icon-name'><a href='mailto: team@sachacks.io'>Sponsor</a></p>
                </div>
            </div>
            { backdrop }
        </React.Fragment>
    );
};

export default Apply;
