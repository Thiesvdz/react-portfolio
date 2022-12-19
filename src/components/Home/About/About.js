import "./About.css";
import AboutProfile from "./AboutProfile/AboutProfile";
import { useState, useEffect } from "react";
import "./Popup/PopUp.css";

const About = (props) => {
  const [popup, setPopUp] = useState(false);
  const [classNamePopUp, setclassNamePopUp] = useState("");

  const togglePopUp = () => {
    setPopUp(!popup);
    switch (popup) {
      case false:
        setclassNamePopUp("classNamePopUp");
        break;
      case true:
        setclassNamePopUp("");
    }
  };

  return (
    <section className="about__section" id="Over">
      <div className="bg__square__container">
        <figure className="bg__square bg__square__1"></figure>
        <figure className="bg__square bg__square__2"></figure>
      </div>
      <AboutProfile togglePopUp={togglePopUp} />

      {popup && (
        <div className={classNamePopUp + " popup"}>
          <div className="overlay"></div>
          <div className="popup__content">
            {/* <figure><img src="" alt=""/>asd</figure> */}
            <h2>Wie ben ik</h2>
            <p>
              Hoi ik ben Thies van der Zon, 18 jarige software developer. In
              2020 ben ik begonnen met mijn codeer avontuur, sindsdien zijn mijn
              skills stevig gegroeid. Ik ben door veel ups en downs gegaan met
              coderen, maar daar heb ik erg veel van geleerd. Ik ben graag bezig
              met Front-End development en design, omdat ik het erg leuk vind om
              mijn creative ideeën tot leven zie komen. In de toekomst wil ik
              graag frequenter met frameworks werken zoals: React, Vue.js en
              Laravel. Daarnaast wil ik ook sterker worden in backend
              voornamelijk met php en databases.
            </p>
            <button className="close__popup" onClick={togglePopUp}>
              <i className="fa-solid fa-times close__popup__i"></i>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
