import "./SectionRight.css"
import TijdLijnItem from "./TijdLijnItem/TijdLijnItem"
import Links from "../Data/Links";

const SectionRight = () => {

    let LinksToBeRenderd = Links.map((Link) => {
        return (<i className={Link.icons + " sectionRightBottom__icon"}></i>
           
        );
      });
  return (
    <div className="sectionRight__wrapper">
      <section className="sectionRightTop__section">
        <TijdLijnItem />
        <TijdLijnItem />
        <TijdLijnItem />
        <TijdLijnItem />
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
