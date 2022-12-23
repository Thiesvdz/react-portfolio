import "./SectionRight.css";
import TijdLijnItem from "./TijdLijnItem/TemplateTijdLijnItem";
import Links from "../Data/Links";

const SectionRight = () => {
  let LinksToBeRenderd = Links.map((Link) => {
    return <i className={Link.icons + " sectionRightBottom__icon"}></i>;
  });
  return (
    <div className="sectionRight__wrapper">
      <section className="sectionRightTop__section">
        <TijdLijnItem
          tijdlijn__date="1 nov 2021"
          tijdlijn__h3="Start"
          tijdlijn__p="We begonnen het project met een bezoek aan het Eye museum in Amsterdam, 
          zodat we een idee kregen van wat ze doen en welke style ze hebben.
          Nadat we een idee hadden van de style zijn we begonnen met de wireframes voor de site."
        />
        <TijdLijnItem
          tijdlijn__date="1 nov 2021"
          tijdlijn__h3="Start"
          tijdlijn__p="We begonnen het project met een bezoek aan het Eye museum in Amsterdam, 
          zodat we een idee kregen van wat ze doen en welke style ze hebben.
          Nadat we een idee hadden van de style zijn we begonnen met de wireframes voor de site."
        />
        <TijdLijnItem
          tijdlijn__date="1 nov 2021"
          tijdlijn__h3="Start"
          tijdlijn__p="We begonnen het project met een bezoek aan het Eye museum in Amsterdam, 
          zodat we een idee kregen van wat ze doen en welke style ze hebben.
          Nadat we een idee hadden van de style zijn we begonnen met de wireframes voor de site."
        />
        <TijdLijnItem
          tijdlijn__date="1 nov 2021"
          tijdlijn__h3="Start"
          tijdlijn__p="We begonnen het project met een bezoek aan het Eye museum in Amsterdam, 
          zodat we een idee kregen van wat ze doen en welke style ze hebben.
          Nadat we een idee hadden van de style zijn we begonnen met de wireframes voor de site."
        />
      </section>
      <div className="arrow__wrapper">
        <i class="fa-solid fa-chevron-right"></i>
      </div>
      <section className="sectionRightBottom__section">
        <div className="sectionRightBottom__wrapper">
          <ul className="sectionRightBottom__ul">{LinksToBeRenderd}</ul>
        </div>
      </section>
    </div>
  );
};

export default SectionRight;
