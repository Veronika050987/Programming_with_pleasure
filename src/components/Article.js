import './Article.css';
import { useNavigate } from 'react-router-dom';

function Article(props)
{
    let{title, content} = props;
    let navigate = useNavigate();
    return(
        <div className='article'>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}
export default Article;