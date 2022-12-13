import "./Skills.css"
import SkillsCard from "./SkillsCard/SkillsCard"
import HTML from "../../../images/icons-talen/html5.svg"
import CSS from "../../../images/icons-talen/css.svg"
import JS from "../../../images/icons-talen/logo-javascript.svg"
import REACT from "../../../images/icons-talen/react.svg"
import LARAVEL from "../../../images/icons-talen/laravel.svg"
import PHP from "../../../images/icons-talen/php.svg"
import WORDPRESS from "../../../images/icons-talen/wordpress.svg"
import SASS from "../../../images/icons-talen/sass.svg"



const Skills = () => {
    return(
        <section className="section__skills">
            <SkillsCard 
                skillsImage={HTML}
                skillsH2="HTML"
                skillsP="Ik gebruik nu ongeveer 2 jaar html en ben vergeleken met het begin een heel stuk verbeterd."
            />
            <SkillsCard 
                skillsImage={CSS}
                skillsH2="CSS"
                skillsP="Net als html gebruik css al ongeveer 2 jaar, 
                ik vindt het altijd erg leuk op nieuwe en verschillende styles uit te proberen om mijn werk te optimaliseren."
            />
            <SkillsCard 
                skillsImage={JS}
                skillsH2="JAVASCRIPT"
                skillsP="Javascript is momenteel niet een van mijn sterkte punten, 
                maar daar ga ik dit jaar verandering in maken. Grotendeels doormiddel van react"
            />
            <SkillsCard 
                skillsImage={REACT}
                skillsH2="REACT"
                skillsP="Ik ben erg nieuw met react en probeer, deze portfolio heb ik gebouwt met react"
            />
            <SkillsCard 
                skillsImage={LARAVEL}
                skillsH2="LARAVEL"
                skillsP="Ik heb 2 periodes van 8 weken met laravel gewerkt. 
                Toen beviel het mij best wel, alleen nu ik react aan het leren ben gaat mijn voorkeur naar react"
            />
            <SkillsCard 
                skillsImage={PHP}
                skillsH2="PHP"
                skillsP="Ik heb in een aantal projecten php gebruikt 
                ik vind het wel nog lastig aangezien mijn back-end kennis momenteel erg gelimiteerd is."
            />
            
            <SkillsCard 
                skillsImage={WORDPRESS}
                skillsH2="WORDPRESS"
                skillsP="Ik heb 2 periodes van 8 weken met wordpress gewerkt. "
            />
            <SkillsCard 
                skillsImage={SASS}
                skillsH2="SASS"
                skillsP="Ik ben recent begonnen met sass, deze portfolio bouw ik ook met sass om te oefenen."
            />

        </section>
    )
}

export default Skills