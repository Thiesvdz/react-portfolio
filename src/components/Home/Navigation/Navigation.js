import "./Navigation.css";
import logoTZ from "../../../images/Logo/LogoTZ.svg";
import NavigationData from "./NavigationData/NavigationData";
import {useState} from "react";


const Navigation = () => {

const [navClick, setnavClick] = useState(false);

const menuClick = () => {
    setnavClick(!navClick);
}

  let NavigationFromData = NavigationData.map((item,id) => {
    return (
      <li className={item.className} key={id}>
        <a href={item.url} className="navbar__a">
          {item.title}
        </a>
        <i className={item.icon + " icons"}></i>
      </li>
    );
  });

  return (
    <nav className="nav">
      <figure className="nav__logo__container">
        <img src={logoTZ} alt="" className="nav__logo" />
      </figure>
      <div className="nav__small">
          <i className={navClick ? "fa-solid fa-times" : "fa-solid fa-bars" + " dropdown"} onClick={menuClick}></i>
      </div>
      <ul className={navClick ? "nav__ul active": "nav__ul"}>{NavigationFromData}</ul>
    </nav>
  );
};

export default Navigation;
