import aboutImage from "../../../../images/Profile-image/FotoThies.jpg";
import AboutIcons from "../Data/AboutIcons";

const AboutProfile = (props) => {
  let aboutIconRendered = AboutIcons.map((Icon) => {
    return (
      <li className="about__text__li">
        <i className={Icon.className}></i>
      </li>
    );
  });

  return (
    <article className="about__leftside">
      <figure className="about__image__container">
        <img src={aboutImage} alt="" className="about__image" />
      </figure>
      <div className="about__text__container">
          <h2 className="about__text__h2">Thies van der Zon</h2>
          <p>Software Developer</p>
        <button className="about__text__btn" onClick={props.togglePopUp}>Meer lezen</button>  
        </div>
      
      <footer className="about__text__footer">
        <ul className="about__text__ul">
          {aboutIconRendered}
        </ul>
      </footer>
    </article>
  );
};

export default AboutProfile;
