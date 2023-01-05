import "./About.css";
import aboutImage from "../../../images/Profile-image/FotoThies.jpg";
import RenderIcons from "./Data/RenderIcons"

import { useState, useEffect } from "react";
import Model from "./Model/Model";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [modelOpen, setModelOpen] = useState(false);

  const close = () => setModelOpen(false);
  const open = () => setModelOpen(true);

 
  return (
    <section className="about__section" id="Over">
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
          <RenderIcons />
        </footer>
      </article>
    </section>
  );
};

export default About;
