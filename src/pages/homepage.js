import Navigation from "../components/Home/Navigation/Navigation"
import Header from "../components/Home/Header/Header"
import About from "../components/Home/About/About"
import Skills from "../components/Home/Skills/Skills"
import Projects from "../components/Home/Projects/Projects"
import Contact from "../components/Home/Contact/Contact"
import Footer from "../components/Home/Footer/Footer"

const homepage = () => {
    return(
        <>
            <Navigation/>
            <Header 
                titelH1="Ik ben Thies van der Zon"
                titelH2="Enthousiaste en leergierige software developer"
                titelH3="Welkom op mijn portfolio"
                imageH2=""
            />
            <About 
                naam="Thies van der Zon"
                leeftijd="18"
                opleiding="Software development"

               
            />
            <Skills />
            <Projects  />
            <Contact />
            <Footer/>
        </>
    )
}

export default homepage