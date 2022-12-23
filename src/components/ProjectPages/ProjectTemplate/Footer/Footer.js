import "./Footer.css"

const Footer = (props) => {
    return ( 
        <footer className="footer">
            <div className="footer__h1__wrapper">
                <h1 className="footer__h1">{props.h1 || "project naam"}</h1>
            </div>
        </footer>
    );
}
 
export default Footer;