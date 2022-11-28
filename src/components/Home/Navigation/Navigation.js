import "./Navigation.css"
import logoTZ from "../../../images/Logo/LogoTZ.svg"

const Navigation = () => {
    return(
        <nav className="nav">
            <figure className="nav__logo__container">
                <img src={logoTZ} alt="" className="nav__logo"/>
            </figure>
            <ul className="nav__ul">
                <li className="nav__li">Home</li>
                <li className="nav__li">Over mij</li>
                <li className="nav__li">Skills</li>
                <li className="nav__li">Projecten</li>
                <li className="nav__li">Contact</li>
            </ul>
        </nav>
    )
}

export default Navigation