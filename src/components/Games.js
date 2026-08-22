import { useState, useContext } from 'react';
import './Games.css';
import Game from './Game';
import { Link } from 'react-router-dom';
import quitz from '../img/quitz.png';
import monster2 from '../img/monster2.png';
import red_car_mod from '../img/red_car_mod.png';
import housik from '../img/housik.png';
import CRUD2 from '../img/CRUD2.png';
import final from '../img/final.png';
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
                titleKey: "game_sql_garage", 
                contentKey: "game_sql_garage_desc",
                url: "https://veronika050987.github.io/sql_game/",
                image: red_car_mod
            },
            {
                titleKey: "game_house_title",
                contentKey: "game_house_desc",
                url: "https://veronika050987.github.io/react_nika_house_game/",
                image: housik
            },
            {
                titleKey: "game_kids_garage",
                contentKey: "game_kids_garage_desc",
                url: "https://veronika050987.github.io/crud_kids_garage/",
                image: CRUD2
            },
            {
                titleKey: "game_webka",
                contentKey: "game_webka_desc",
                url: "https://veronika050987.github.io/nika_react_csharpik/",
                image: final
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