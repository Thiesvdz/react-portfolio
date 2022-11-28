import "./About.css"
import {useState} from "react"
import aboutImage from "../../../images/Profile-image/FotoThies.jpg"


const About = (props) => {
    const [style, setStyle] = useState(false); 

    // const onArrowClick = () => {
    //     setStyle("show")
    // }
    return(
        <section className="about__section" >
            <article className="about__leftside">
                <figure className="about__image__container">
                    <img src={aboutImage} alt="" className="about__image"/>
                </figure>
                <div className="about__text__container">
                    <p className="about__text__p"><span className="about__text__span">Naam:</span> {props.naam}</p>
                    <p className="about__text__p"><span className="about__text__span">Leeftijd:</span> {props.leeftijd}</p>
                    <p className="about__text__p"><span className="about__text__span">Opleiding:</span> {props.opleiding}</p>
                    <p className="about__text__p">4</p>
                    <p className="about__text__p">5</p>
                </div>
            </article>

            <article className="about__rightside">
                <figure className="arrow__container">
                    <i className="fa-solid fa-arrow-right" onClick={()=>setStyle(!style)}></i>
                </figure>

                <div className="about__rightside__container">
                    {style?
                    <p className="about__rightside__p">
                        Hoi ik ben Thies van der Zon, 18 jarige software developer. <br/>
                        In 2020 ben ik begonnen met mijn codeer avontuur, sindsdien zijn mijn skills stevig gegroeid.
                        Ik ben door veel ups en downs gegaan met coderen, maar daar heb ik erg veel van geleerd. <br/> <br/>

                        Ik ben graag bezig met Front-End development en design, 
                        omdat ik het erg leuk vind om mijn creative ideeën tot leven zie komen. <br/> 

                        In de toekomst wil ik graag frequenter met frameworks werken zoals: React, Vue.js en Laravel.
                        Daarnaast wil ik ook sterker worden in backend voornamelijk met php en databases. 
                    </p>:null}
                </div>
            </article>

        </section>
    )
}

export default About