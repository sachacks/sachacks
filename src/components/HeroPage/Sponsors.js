import React from 'react'
import './Sponsors.css'

import Sponsor from './Sponsor/Sponsor'

const Sponsors = () => {
    return (
        <div className='sponsors'>
            <h1>Sponsors</h1>
            <div className='sp-row'>
                <Sponsor />
                <Sponsor />
                <Sponsor />
                <Sponsor />
            </div>
            <div className='sp-row'>
                <Sponsor />
                <Sponsor />
                <Sponsor />
                <Sponsor />
            </div>
            <h1>Partners</h1>
            <div className='sp-row'>
                <Sponsor />
                <Sponsor />
                <Sponsor />
                <Sponsor />
            </div>
            <div className='sp-row'>
                <Sponsor />
                <Sponsor />
                <Sponsor />
                <Sponsor />
            </div>
            <div className='sp-space'></div>
        </div>
    )
}

export default Sponsors
