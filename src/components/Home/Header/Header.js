import "./Header.css";
import ProfileImage from "../../../images/Profile-image/FotoThies.jpg";
import { motion } from "framer-motion";

const Header = (props) => {
  
  return (
    <motion.header
      className="header"
      id="Header"
      
    >
        <div className="header__intro__text">
          <motion.div class="border-top" initial={{ opacity: 0, y: -80, x: -80}} whileInView={{ opacity: 1, y: 0, x: 0 }} transition={{ ease: "easeOut", duration: .5 }}></motion.div>
          <motion.div class="border-bottom"  initial={{ opacity: 0, y: 80, x: 80}} whileInView={{ opacity: 1, y: 0, x: 0 }}  transition={{ ease: "easeOut", duration: .5 }}></motion.div>


          <motion.div className="a"
            initial={{ opacity: 0, y: -80}}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ type: "spring", stiffness: 90 }}>
            <h3 className="header__h3">
              {props.titelH3 || "Placeholder"}
            </h3>
            <h1 className="header__h1">
              {props.titelH1 || "Placeholder"}
            </h1>
            <h2 className="header__h2">
              <span className="green__text">Enthousiaste</span> en <span className="green__text">leergierige</span> software developer
            </h2>  
          </motion.div>
          
        </div>
    </motion.header>
  );
};

export default Header;
