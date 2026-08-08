import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About()
{
    let [posts, setPosts ] = useState([]);
    useEffect
    (
        () => 
        {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(data => setPosts(data)) 
        }, []
    ); 
    return(
        <div className='content'>
            <h2>About</h2>
            <p>Маршрутизация &mdash; перенаправление компонентов.</p>
            <ul style ={{display:"block"}}>
                {
                    posts.map
                    (
                        post => 
                        (
                            <li key={post.id}>
                                <Link to={`/info/${post.id}`}>{post.title}</Link>
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    )
}
export default About;