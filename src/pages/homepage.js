import Navigation from "../components/Home/Navigation/Navigation"
import Header from "../components/Home/Header/Header"
import About from "../components/Home/About/About"
import Skills from "../components/Home/Skills/Skills"
import Projects from "../components/Home/Projects/Projects"
import Contact from "../components/Home/Contact/Contact"


// for(let i = 0; i < 9; i++){
// }

const homepage = () => {
    return(
        <>
            <Navigation/>
            <ul class="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <Header 
                titelH1="Thies van der Zon"
                // titelH2="Enthousiaste en leergierige software developer"
                titelH3="Welkom op mijn portfolio"
                imageH2=""
            />
            <About 
                naam="Thies van der Zon"
                leeftijd="18"
                opleiding="Software development"

               
            />
            <Skills />
            <Projects />
            <Contact />
        </>
    )
}

export default homepage