import Navigation from "../components/Home/Navigation/Navigation"
import Header from "../components/Home/Header/Header"
import About from "../components/Home/About/About"
import Skills from "../components/Home/Skills/Skills"
import Projects from "../components/Home/Skills/Skills"

const homepage = () => {
    return(
        <>
            <Navigation/>
            <Header />
            <About />
            <Skills />
            {/*<Projects /> */}
        </>
    )
}

export default homepage