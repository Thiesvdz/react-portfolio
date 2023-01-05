import { motion } from "framer-motion"
import Backdrop from "../Backdrop/Backdrop";
import "./Model.css"
import "../About.css"
import RenderIcons from "../Data/RenderIcons"
import IMGThies from "../../../../images/Profile-image/FotoThies.jpg";

const Modal = ({handleClose, text}) => {


    const dropIn = {
        hidden: {
            y: "-100vh",
            opacity: 0,

        },
        visible: {
            y: "0",
            opacity: 1,
            transition: {
                duration: 0.1,
                type: "spring",
                damping: 45,
                stiffness: 400,
            }
        },
        exit: {
            y: "100vh",
            opacity: 0,

        }
    }

    return ( 
        <Backdrop onClick={handleClose}>
            <motion.div 
                onClick={(e) => e.stopPropagation()}
                className="model"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                // drag
                >
                    <article className="popup__text__wrapper">

                        <section className="popup__section__left">
                            <figure className="popup__img__container"><img src={IMGThies} className="popup__image" alt="Foto van Thies"/></figure>
                            <div className="text__wrapper">
                                <h2 className="about__text__h2">Thies van der Zon</h2>
                                <p>Software Developer</p>
                            </div>
                            <footer className="about__text__footer">
                                <RenderIcons />
                            </footer>
                        </section>

                        <section className="popup__section">
                            <div className="popup__tekst__wrapper">
                                <h2 className="popup__h2"> - Wie ben ik - </h2>
                                <p className="popup__text">
                                Hoi ik ben Thies van der Zon, 18 jarige software developer. In
                                2020 ben ik begonnen met mijn codeer avontuur, sindsdien zijn mijn
                                skills stevig gegroeid. Ik ben door veel ups en downs gegaan met
                                coderen, maar daar heb ik erg veel van geleerd. 
                                <br/><br/>
                                Ik ben graag bezig
                                met Front-End development en design, omdat ik het erg leuk vind om
                                mijn creative ideeën tot leven zie komen. In de toekomst wil ik
                                graag frequenter met frameworks werken zoals: React, Vue.js en
                                Laravel. Daarnaast wil ik ook sterker worden in backend
                                voornamelijk met php en databases.
                                </p>
                            </div>

                            <footer className="button__wrapper"><button className="about__text__btn" onClick={handleClose}>Sluiten</button></footer>
                        </section>
                    </article>
            </motion.div>
        </Backdrop>
     );
}
 
export default Modal;