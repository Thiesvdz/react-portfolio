import "./Header.css"
import ProfileImage from "../../../images/Profile-image/FotoThies.jpg"


const Header = () => {
    return(
        <header className="header">
            <section>
                <div className="header__intro__text">
                    <h3 className="header__h3">Welkom op mijn portfolio</h3>
                    <h1 className="header__h1">Ik ben Thies van der Zon</h1>
                    <h2 className="header__h2">Enthousiaste en leergierige software developer</h2>
                </div>
                <div className="header__socials">
                    <li className="header__socials__li"><i className="fa-brands fa-github header__socials__i"></i></li>
                    <li className="header__socials__li"><i className="fa-brands fa-linkedin-in header__socials__i"></i></li>
                    <li className="header__socials__li"><i className="fa-solid fa-address-book header__socials__i"></i></li>
                </div>
            </section>
            <figure className="header__socials__image__container">
                <img src={ProfileImage} alt="" className="header__socials__image"/>
            </figure>
        </header>
    )
}

export default Header