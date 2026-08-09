import './Home.css';
import { LanguageContext } from './LanguageContext';
import { useContext } from 'react';
import fact from '../img/fact.jpg';

function Home()
{
    const { t } = useContext(LanguageContext);
    return(
        <div className="justified-text">
            <p >{ t('home_good') }</p>
            <p >{ t('home_ability') }</p>
            <p >{ t('home_errors') }</p>
            <p >{ t('home_standard') }</p>
            <p >{ t('home_task') }</p>
            <p >{ t('home_site') }</p>
            <div style={{ textAlignment: 'center', margin: '20px 0' }}>
        <img 
            src={fact} 
            alt="Programming illustration" 
            style={{ maxWidth: '100%', height: '230px', borderRadius: '8px' }} 
        />
    </div>
        </div>
    )
}
export default Home;