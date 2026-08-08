import './Footer.css';

function Footer()
{
    return(
        <div className="footer">
           Copyright &copy; &mdash; {new Date().getFullYear()};
           Nika-studio
        </div>
    )
}
export default Footer;