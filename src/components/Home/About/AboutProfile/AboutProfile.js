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
          {aboutInfo}
        <button onClick={props.textDisplay}>Meer lezen</button>  
        </div>
    </article>
  );
};

export default AboutProfile;
