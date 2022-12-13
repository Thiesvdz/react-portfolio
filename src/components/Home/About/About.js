import "./About.css";
import AboutProfile from "./AboutProfile/AboutProfile";
import AboutText from "./AboutText/AboutText";
import { useState, useEffect } from "react";

const About = (props) => {
  const [className, setclassName] = useState("");
  const [classNameTF, setclassNameTF] = useState(true);

  const showHideText = () => {
    setclassNameTF(!classNameTF);

    if (classNameTF === true) {
      setclassName("show");
    } else {
      setclassName("hide");
    }
  };

  return (
    <section className="about__section">
      <div className="bg__square__container">
        <figure className="bg__square bg__square__1"></figure>
        <figure className="bg__square bg__square__2"></figure>
      </div>
      <AboutProfile showHideText={showHideText} />

      <AboutText
        AboutTextP="Hoi ik ben Thies van der Zon, 18 jarige software developer.
                    In 2020 ben ik begonnen met mijn codeer avontuur, sindsdien zijn mijn
                    skills stevig gegroeid. Ik ben door veel ups en downs gegaan met
                    coderen, maar daar heb ik erg veel van geleerd.
                    Ik ben graag bezig met Front-End development en design, omdat ik het
                    erg leuk vind om mijn creative ideeën tot leven zie komen. 
                    In de toekomst wil ik graag frequenter met frameworks werken zoals:
                    React, Vue.js en Laravel. Daarnaast wil ik ook sterker worden in
                    backend voornamelijk met php en databases."
        showHideText={showHideText}
        className={className}
      />
    </section>
  );
};

export default About;
