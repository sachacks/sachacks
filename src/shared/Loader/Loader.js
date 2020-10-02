/**
 * Derek's idea of having a CSS Loader at the very beginning of the page.
 * Still no progress - wtv we'll see
 */

import React from 'react'
import './Loader.css'

const Loader = () => {
    return (
        <div className='background-loader'>
            <div className='loader'></div>
            <div className='rocket-1'><img src='/rocket.png' alt='sachacks rocket' /></div>
            <div className='rocket-2'><img src='/rocket.png' alt='sachacks rocket' /></div>
        </div>
    )
}

export default Loader
