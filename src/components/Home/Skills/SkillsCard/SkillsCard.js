import "./SkillsCard.css";
import "../Data/Skills.css";
import SkillsData from "../Data/SkillsData";
import { useState, useEffect } from "react";

const SkillsCard = (props) => {
  const [index, setIndex] = useState(0);

  const module = (n, m) => {
    let result = n % m;

    // Geeft een positive waarde terug
    return result >= 0 ? result : result + m;
  };

  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % SkillsData.length);
      // console.log(index)
    }, 3500);
  }, [index]);

  let skillsCardToBeRenderd = SkillsData.map((data) => {
    const toLeft1 = module(index - 1, SkillsData.length);
    const toLeft2 = module(index - 2, SkillsData.length);
    const toLeft3 = module(index - 3, SkillsData.length);
    const toLeft4 = module(index - 4, SkillsData.length);
    const toRight1 = module(index + 1, SkillsData.length);
    const toRight2 = module(index + 2, SkillsData.length);
    const toRight3 = module(index + 3, SkillsData.length);

    let classNameCarousel = "skills";

    if (data.id === index) {
      classNameCarousel = "skills5";
    } else if (data.id === toLeft1) {
      classNameCarousel = "skills4";
    } else if (data.id === toLeft2) {
      classNameCarousel = "skills3";
    } else if (data.id === toLeft3) {
      classNameCarousel = "skills2";
    } else if (data.id === toLeft4) {
      classNameCarousel = "skills1";
    } else if (data.id === toRight1) {
      classNameCarousel = "skills6";
    } else if (data.id === toRight2) {
      classNameCarousel = "skills7";
    } else if (data.id === toRight3) {
      classNameCarousel = "skills8";
    } else classNameCarousel = "skills";

    return (
      <article className={"article__skills__card  " + classNameCarousel + " " + data.classNameHeader}>
        <header className="article__skills__header ">
          <figure className="article__image__container">
            <img
              src={data.image}
              alt={data.alt}
              key={data.id}
              className="article__image"
            />
          </figure>
        </header>
        <footer className={"article__skills__footer "+ data.classNameFooter}>
          <h2 className="article__skills__h2">{data.title}</h2>
          <p className="article__skills__p">{data.description}</p>
        </footer>
      </article>
    );
  });
  return (
    <>
      <div className="carousel">{skillsCardToBeRenderd}</div>
    </>
  );
};

export default SkillsCard;
