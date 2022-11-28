import Navigation from "../components/Home/Navigation/Navigation"
import Header from "../components/Home/Header/Header"
import About from "../components/Home/About/About"
import Skills from "../components/Home/Skills/Skills"
import Projects from "../components/Home/Skills/Skills"

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
            <About />
            {/*<Skills />
            <Projects /> */}
        </>
    )
}

export default homepage