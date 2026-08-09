import './Menu.css';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LanguageContext } from '../components/LanguageContext';

function Menu()
{
    const { lang, setLang, t } = useContext(LanguageContext);
    return(
        <div className="menu-container">
            <ul>
                <li>
                    <NavLink to="/" end className={({isActive}) => isActive ? "nav-link-active" : "nav-link" }>
                        {t('menu_home')}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({isActive}) => isActive ? "nav-link-active" : "nav-link" }>
                        {t('menu_about')}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/games" className={({isActive}) => isActive ? "nav-link-active" : "nav-link" }>
                        {t('menu_games')}
                    </NavLink>
                </li>
            </ul>
            <div className="lang-switcher">
                <button 
                    className={lang === 'ru' ? 'btn-lang active' : 'btn-lang'} 
                    onClick={() => setLang('ru')}
                    style={{ borderRadius: '6px', backgroundColor: '#3CB371', padding: '10px', gap: '5px', margin: '10px', cursor: 'pointer' }}
                >
                    RU
                </button>
                <button 
                    className={lang === 'en' ? 'btn-lang active' : 'btn-lang'} 
                    onClick={() => setLang('en')}
                    style={{ borderRadius: '6px', backgroundColor: '#3CB371', padding: '10px', gap: '5px', margin: '10px', cursor: 'pointer'}}
                >
                    EN
                </button>
            </div>
        </div>
    )
}
export default Menu;