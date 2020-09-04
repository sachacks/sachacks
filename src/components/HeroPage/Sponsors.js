import React from 'react';
import './Sponsors.css';

import Sponsor from './Sponsor/Sponsor';

const sponsor1 = { img: '/sponsors/sac_kings_logo.png', alt: 'Kings Logo', link: 'https://www.nba.com/kings/' };
const sponsor2 = { img: '/sponsors/Bugsee-Logo.svg', alt: 'Bugsee Logo', link: 'https://www.bugsee.com/' };
const partner1 = { img: '/partners/mlh-logo-white.png', alt: 'MLH Logo', link: 'https://mlh.io/' };
const partner2 = { img: '/partners/hack-club-bank.png', alt: 'Hack Club Bank Logo', link: 'https://hackclub.com/' };
const partner3 = { img: '/partners/HL-Logo-Traditional.png', alt: 'Hacker Lab Logo', link: 'https://hackerlab.org/en' };
const partner4 = { img: '/partners/fcc_eg_logo_transparent.png', alt: 'FreeCodeCamp Logo', link: 'https://www.meetup.com/freeCodeCamp-Greater-Sacramento-Area/' };
const partner5 = { img: '/partners/acm.png', alt: 'ACM Logo', link: 'http://losriosccd.acm.org/' };
const partner6 = { img: '/partners/sdc.jpg', alt: 'SDC Logo', link: 'https://www.sacdevcollective.org/' };
const partner7 = { img: '/partners/wics.png', alt: 'WICS Logo', link: 'https://www.facebook.com/DavisWICS/' };

const Sponsors = () => {
    return (
        <div className='sponsors'>
            <h1 id='sponsor' >Sponsors</h1>
            <div className='sp-row king'>
                <Sponsor img={ sponsor1 } />
            </div>
            <div className='sp-row temp'>
                <Sponsor img={ sponsor2 } />
                {/* <Sponsor />
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
