import React, { useState } from 'react';
import './Faq.css';
import '/Users/beam/Documents/sachacks/src/components/HeroPage/Faq.js';

import { GoTriangleDown } from 'react-icons/go';

import * as Questions from './Questions';
import Cards from './FAQCards/FaqCard';


const Faq = () => {

    const [ open, setOpen ] = useState( { open: true } );

    return (
        <div className='faq'>
            <h1>Frequently Asked Questions</h1>
            <div className='questions'>
                <div className='left-side'>
                    <Cards qa={ Questions.q1 } />
                    <Cards qa={ Questions.q2 } />
                    <Cards qa={ Questions.q3 } />
                    <Cards qa={ Questions.q4 } />
                </div>
                <div className='right-side'>
                    <div className='question'>
                        <div className='ques' style={ !open ? { color: '#7BDDDE', transition: '0.5s' } : { color: '#fff', transition: '0.5s' } } onClick={ () => setOpen( !open ) }>
                            Code of Conduct? <GoTriangleDown size='20px' style={ !open ? { marginLeft: '5px', transform: 'rotate(180deg)', transition: '0.5s', color: '#7BDDDE' } : { marginLeft: '5px', transition: '0.5s', color: '#fff' } } />
                        </div>
                        <div className='ans' style={ !open ? { animation: 'slideDown 0.5s ease-in' } : { display: 'none' } }>All participants of our event must follow the MLH Code of Conduct. Click the link below to download a pdf for more information <a id='coc' href='https://sachacks.io/assets/pdf/mlh-code-of-conduct.pdf' target='_blank' rel="noopener noreferrer" >MLH Code of Conduct PDF.</a></div>
                        <div className='line'></div>
                    </div>
                    {/* <Cards qa={ Questions.q6 } /> */ }
                    {/* <Cards qa={ Questions.q7 } /> */ }
                    {/* <Cards qa={ Questions.q8 } /> */ }
                    <Cards qa={ Questions.q9 } />
                    <Cards qa={ Questions.q10 } />
                </div>
            </div>
        </div>
    );
};

export default Faq;
