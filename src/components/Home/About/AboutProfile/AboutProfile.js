import aboutImage from "../../../../images/Profile-image/FotoThies.jpg";
import Aboutp from "../Data/AboutP";

const AboutProfile = (props) => {
  let aboutInfo = Aboutp.map((object) => {
    return (
      <p className="about__text__p">
        <span className="about__text__span">{object.title} </span>
        {object.description}
      </p>
    );
  });

  


  return (
    <article className="about__leftside">
      <figure className="about__image__container">
        <img src={aboutImage} alt="" className="about__image" />
      </figure>
      <div className="about__text__container">
          {/* {aboutInfo} */}
          <h2 className="about__text__h2">Thies van der Zon</h2>
          <p>Software Developer</p>
        <button className="about__text__btn" onClick={props.textDisplay}>Meer lezen</button>  
        </div>
      
      <footer className="about__text__footer">
        <ul className="about__text__ul">
          <li className="about__text__li">
            <i className="fa-brands fa-linkedin about__text__i"></i>
          </li>
          <li className="about__text__li">
            <i className="fa-brands fa-square-github about__text__i"></i>
            </li>
          <li className="about__text__li">
            <i className="fa-sharp fa-solid fa-share about__text__i"></i>
          </li>
          <li className="about__text__li">
            <i className="fa-brands fa-linkedin about__text__i"></i>
          </li>
        </ul>
      </footer>
    </article>
  );
};

export default AboutProfile;
