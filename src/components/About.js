// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import './About.css';
import lemourchik from '../img/lemourchik.png';
import bee from '../img/bee.png';
import khao from '../img/khao.png';

function About()
{
    return(
        <div className='content'>
            <h2>Programming with pleasure</h2>
            
            <div className='container'>
                <div className='programming-block'>
                    <img src={lemourchik} alt="lemourchik"/>
                    <p>Программирование учит нас видеть, как лемур, - замечать мельчайшие баги в темноте кода, широко открывать глаза от удивления и ловко прыгать по веткам в Git.</p>
                </div>
                <div className='programming-block'>
                    <img src={khao} alt="khao"/>
                    <p>Программирование это весело. Особенно первые пять минут, пока ты не пропустил одну запятую и не ушел искать её до трех часов ночи.</p>
                </div>
                <div className='programming-block'>
                    <img src={bee} alt="bee"/>
                    <p>Программирование и пчела связаны напрямую: нужно построить идеальную архитектуру-соты, искать подходящие цветы-части кода, жужжать над кодом всей командой и собирать сладкий нектар работающего релиза.</p>
                </div>
            </div>
        </div>
    )
}
export default About;