import './About.css';
import lemo_baby from '../img/lemo_baby.png';
import bee from '../img/bee.png';
import baby from '../img/baby.png';
import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

function About()
{
    const { t } = useContext(LanguageContext);
    return(
        <div className='content'>
            {/* <h2>{ t('about_title') }</h2> */}
            
            <div className='container'>
                <div className='programming-block'>
                    <img src={lemo_baby} alt="lemo_baby"/>
                    <p>{ t('about_lemour') }</p>
                </div>
                <div className='programming-block'>
                    <img src={baby} alt="baby"/>
                    <p>{ t('about_khao') }</p>
                </div>
                <div className='programming-block'>
                    <img src={bee} alt="bee"/>
                    <p>{ t('about_bee') }</p>
                </div>
            </div>
        </div>
        
    )
}
export default About;