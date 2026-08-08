import { useState } from 'react';
import './Articles.css';
import Article from './Article';
import { Link } from 'react-router-dom';

function Articles()
{
    let [articles, setArticles] = useState
    (
        [
            {title: "Components", content: "Компонент представляет собой самую обычнцю функцию, которая отвечает за отображение части страницы."},
            {title: "Props", content: "Props - параметры, которые принимает компонент."},
            {title: "State", content: "State хранит состояние классового компонента."}
        ]

    );
    return(
        <div>
            <h2>Articles</h2>
            {
                articles.map
                (
                    (item, index) =>
                    {
                        return(<Article key ={index} title={item.title} content={item.content}/>)
                    }
                )
            }
            <Link to="/">На главную</Link>
        </div>
    )
}
export default Articles;