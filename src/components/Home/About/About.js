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