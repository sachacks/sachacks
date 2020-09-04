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
