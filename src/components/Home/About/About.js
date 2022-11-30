import "./About.css"
import AboutProfile from "./AboutProfile/AboutProfile"
import AboutText from "./AboutText/AboutText"
import {useState, useEffect} from "react"


const About = (props) => {

    const [aboutTextBtn, setaboutTextBtn] = useState(false);

    const textDisplay = () => {
        setaboutTextBtn(!aboutTextBtn);
    }

    

    if(aboutTextBtn === false){
       return(
            <section className="about__section" >
                <div className="bg__square__container">
                    <figure className="bg__square bg__square__1"></figure>
                </div>
                
                <AboutProfile 
                    textDisplay={textDisplay}
                />
                {/* <AboutText /> */}
            </section>
        ) 
    }else{
        return(
            <section className="about__section" >
                <AboutProfile/>
                <AboutText />
            </section>
        ) 
    }

        
    }

export default About