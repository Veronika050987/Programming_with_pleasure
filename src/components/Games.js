import { useState } from 'react';
import './Games.css';
import Game from './Game';
import { Link } from 'react-router-dom';
import ship from '../img/ship.png';
import monster2 from '../img/monster2.png';

function Games()
{
    let [games, setGames] = useState
    (
        [
            {   
                title: "Packet race game", 
                content: "Control the router and the browser to assemble the website before a timer runs out",
                url: "https://veronika050987.github.io/react_nika_space/",
                image: ship
            },
            {
                title: "Quitz in poems", 
                content: "Answer quitz questions",
                url: "https://veronika050987.github.io/react_nika_it_test/",
                image: monster2
            },
            {
                title: "State", content: "State хранит состояние классового компонента."
            }
        ]

    );
    return(
        <div>
            <h2 style={{color: "#00BFFF"}}>Games</h2>
            {
                games.map
                (
                    (item, index) =>
                    {
                        return(
                            <Game 
                                key ={index} 
                                title={item.title} 
                                content={item.content}
                                url={item.url}
                                image={item.image}
                            />
                        )
                    }
                )
            }
            <Link to="/">На главную</Link>
        </div>
    )
}
export default Games;