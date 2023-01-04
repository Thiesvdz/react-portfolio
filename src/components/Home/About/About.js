import "./About.css";
import aboutImage from "../../../images/Profile-image/FotoThies.jpg";
import AboutIcons from "./Data/AboutIcons";

import { useState, useEffect } from "react";
import Model from "./Model/Model";
import { motion, AnimatePresence } from "framer-motion";

const About = (props) => {
  const [modelOpen, setModelOpen] = useState(true);

  const close = () => setModelOpen(false);
  const open = () => setModelOpen(true);

  let aboutIconRendered = AboutIcons.map((Icon) => {
    return (
      <li className="about__text__li">
        <i className={Icon.className}></i>
      </li>
    );
  });
  return (
    <section className="about__section" id="Over">
      {/* <div className="bg__square__container">
        <figure className="bg__square bg__square__1"></figure>
        <figure className="bg__square bg__square__2"></figure>
      </div> */}

      <article className="about__leftside">
          <figure className="about__image__container">
            <img src={aboutImage} alt="" className="about__image" />
          </figure>
        <div className="about__text__container">
          <h2 className="about__text__h2">Thies van der Zon</h2>
          <p>Software Developer</p>
          <AnimatePresence initial={false} exitBeforeEnter={true}>
            {modelOpen && <Model modelOpen={modelOpen} handleClose={close} />}
          </AnimatePresence>
          <motion.button
            className="about__text__btn"
            onClick={() => (modelOpen ? close() : open())}
          >
            Meer lezen
          </motion.button>
        </div>
        <footer className="about__text__footer">
          <ul className="about__text__ul">{aboutIconRendered}</ul>
        </footer>
      </article>
    </section>
  );
};

export default About;
