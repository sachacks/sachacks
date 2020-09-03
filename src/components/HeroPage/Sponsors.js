import React from 'react';
import './Sponsors.css';

import Sponsor from './Sponsor/Sponsor';

const sponsor1 = { link: '/sponsors/sac_kings_logo.png', alt: 'Kings Logo' };
const partner1 = { link: '/partners/mlh-logo-white.png', alt: 'MLH Logo' };
const partner2 = { link: '/partners/hack-club-bank.png', alt: 'Hack Club Bank Logo' };
const partner3 = { link: '/partners/HL-Logo-Traditional.png', alt: 'Hacker Lab Logo' };
const partner4 = { link: '/partners/fcc_eg_logo_transparent.png', alt: 'FreeCodeCamp Logo' };
const partner5 = { link: '/partners/acm.png', alt: 'ACM Logo' };
const partner6 = { link: '/partners/sdc.jpg', alt: 'SDC Logo' };
const partner7 = { link: '/partners/wics.png', alt: 'WICS Logo' };

const Sponsors = () => {
    return (
        <div className='sponsors'>
            <h1 id='sponsor' >Sponsors</h1>
            <div className='sp-row' id='temp'>
                {/* <Sponsor />
                <Sponsor />
                <Sponsor /> */}
                <Sponsor img={ sponsor1 } />
            </div>
            <div className='sp-row'>
                {/* <Sponsor />
                <Sponsor />
                <Sponsor />
                <Sponsor /> */}
            </div>
            <h1 id='partner' >Partners</h1>
            <div className='sp-row'>
                <Sponsor img={ partner1 } />
                <Sponsor img={ partner2 } />
                <Sponsor img={ partner3 } />
                <Sponsor img={ partner4 } />
            </div>
            <div className='sp-row'>
                <Sponsor img={ partner5 } />
                <Sponsor img={ partner6 } />
                <Sponsor img={ partner7 } />
            </div>
            <div className='sp-space'></div>
        </div>
    );
};

export default Sponsors;
