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
            <p>{content}</p>
            {image && <img src={image} width={54} height={65} alt="Ship" />}
        </div>
    )
}
export default Game;