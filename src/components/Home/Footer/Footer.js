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
            <InfoWrapper 
                info__h3__1={"Contact"}
                info__p__1={"06 12 34 56 78"}
                info__h3__2={"E-mail"}
                info__p__2={"thiesvanderzon@gmail.com"}
                info__h3__3={"Locatie"}
                info__p__3={"Warmenhuizen"}
            />
            <NavWrapper />
            <SocialWrapper/>
        </footer>
    );
}
 
export default Footer;