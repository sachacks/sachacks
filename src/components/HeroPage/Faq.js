import React from 'react';
import './Faq.css';

import * as Questions from './Questions';
import Cards from './FAQCards/FaqCard';

const Faq = () => {

    return (
        <div className='faq'>
            <h1>Frequently Asked Question</h1>
            <div className='questions'>
                <div className='left-side'>
                    <Cards qa={ Questions.q1 } />
                    <Cards qa={ Questions.q2 } />
                    <Cards qa={ Questions.q3 } />
                    <Cards qa={ Questions.q4 } />
                    <Cards qa={ Questions.q5 } />
                </div>
                <div className='right-side'>
                    <Cards qa={ Questions.q6 } />
                    <Cards qa={ Questions.q7 } />
                    <Cards qa={ Questions.q8 } />
                    <Cards qa={ Questions.q9 } />
                    <Cards qa={ Questions.q10 } />
                </div>
            </div>
        </div>
    );
};

export default Faq;
