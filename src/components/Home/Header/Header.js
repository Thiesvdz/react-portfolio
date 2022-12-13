import "./Header.css"
import ProfileImage from "../../../images/Profile-image/FotoThies.jpg"


const Header = (props) => {

    

    return(
        <header className="header">
            <section>
                <div className="header__intro__text"> 
                    <h3 className="header__h3">{props.titelH3 || "Placeholder"}</h3>
                    <h1 className="header__h1">{props.titelH1 || "Placeholder"}</h1>
                    <h2 className="header__h2">{props.titelH2 || "Placeholder"}</h2>
                </div>
                <div className="header__socials">
                    <li className="header__socials__li"><i className="fa-brands fa-github header__socials__i"></i></li>
                    <li className="header__socials__li"><i className="fa-brands fa-linkedin-in header__socials__i"></i></li>
                    <li className="header__socials__li"><i className="fa-solid fa-address-book header__socials__i"></i></li>
                </div>
            </section>
            <figure className="header__image__container">
                <img src={ProfileImage} alt="" className="header__socials__image"/>
                <h2 className="header__image__h2">{props.imageH2 || "placeholder"}</h2>
            </figure>
        </header>
    )
}

export default Header