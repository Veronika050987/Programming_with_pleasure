import { useState, useContext } from 'react';
import './Games.css';
import Game from './Game';
import { Link } from 'react-router-dom';
import quitz from '../img/quitz.png';
import monster2 from '../img/monster2.png';
import { LanguageContext } from './LanguageContext';


function Games()
{
    const { t } = useContext(LanguageContext);
    let [games, setGames] = useState
    (
        [
            {   
                titleKey: "game_race_title", 
                contentKey: "game_race_desc",
                url: "https://veronika050987.github.io/react_nika_space/",
                image: monster2
            },
            {
                titleKey: "game_quiz_title", 
                contentKey: "game_quiz_desc",
                url: "https://veronika050987.github.io/react_nika_it_test/",
                image: quitz
            },
            {
                titleKey: "game_state_title", 
                contentKey: "State хранит состояние классового компонента."
            }
        ]

    );
    return(
        <div>
            {
                games.map
                (
                    (item, index) =>
                    {
                        return(
                            <Game 
                                key ={index} 
                                title={ t(item.titleKey)} 
                                content={ t(item.contentKey) }
                                url={item.url}
                                image={item.image}
                            />
                        )
                    }
                )
            }
            <Link to="/" style={{ display: 'inline-block', marginBottom: '8px' }}>{ t('homepage') }</Link>
        </div>
    )
}
export default Games;