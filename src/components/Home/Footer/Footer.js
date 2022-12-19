import "./Footer.css";
import InfoWrapper from "./Wrappers/InfoWrapper"
import NavWrapper from "./Wrappers/NavWrapper"
import SocialWrapper from "./Wrappers/SocialWrapper"

const Footer = (props) => {
    return ( 
        <footer className="footer">
            <header className="footer__header">
                <h1 className="footer__header__h1">NAVIGATIE</h1>
            </header>
            <InfoWrapper/>
            <NavWrapper />
            <SocialWrapper/>
        </footer>
    );
}
 
export default Footer;