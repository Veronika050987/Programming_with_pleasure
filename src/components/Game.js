import './Game.css';
import { useNavigate } from 'react-router-dom';

function Game(props)
{
    let{title, content, url, image} = props;
    let navigate = useNavigate();
    return(
        <div className='game'>
            <h2>
                <a href={url} target="_blank" rel="noopener noreferrer"> 
                {title}
                </a>
            </h2>
            {image && <img src={image} width={56} height={60} alt={title} />}
            <p>{content}</p>
            
        </div>
    )
}
export default Game;