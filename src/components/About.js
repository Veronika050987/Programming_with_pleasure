import './About.css';
import lemourchik from '../img/lemourchik.png';
import bee from '../img/bee.png';
import khao from '../img/khao.png';
import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

function About()
{
    const { t } = useContext(LanguageContext);
    return(
        <div className='content'>
            <h2>{ t('about_title') }</h2>
            
            <div className='container'>
                <div className='programming-block'>
                    <img src={lemourchik} alt="lemourchik"/>
                    <p>{ t('about_lemour') }</p>
                </div>
                <div className='programming-block'>
                    <img src={khao} alt="khao"/>
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