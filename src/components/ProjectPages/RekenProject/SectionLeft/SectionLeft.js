import "./SectionLeft.css";
import "../../ProjectTemplate/SectionLeft/TemplateLeft.css";
import IconsData from "../Data/Icons";

const SectionLeft = () => {

    // let icons = IconsData.map(icon =>{
    //     return <li className="sectionbottom__li"><i className={icon.classNameIcon}></i></li>

    // })

    return ( 
        <div className="sectionLeft__wrapper">
            <section className="sectiontop__section">
                <figure className="sectiontop__figure">
                    <img src="" alt="" className="sectiontop__image__slider"/>
                </figure>
            </section>
            <section className="sectionbottom__section">
                <header className="sectionbottom__header">
                    <h1 className="sectionbottom__h1__reken">Naam Project</h1>
                </header>
                <div className="sectionbottom__text__wrapper">
                    <p className="sectionbottom__p">
                    In periode 4 van leerjaar 1 heb ik een reken sommtjes pro gemaakt in javascript en een 
                    klein beetje gestyled met css. Ik vond dit een erg leuke opdracht om te maken, 
                    en het was een goede oefening om mijn javascript skills te verbeteren.
                    </p>
                </div>
                <footer className="sectionbottom__footer">
                    <ul className="sectionbottom__ul">
                        {/* {icons} */}
                        <li className="sectionbottom__li"><i className="sectionbottom__i fa-brands fa-html5"></i></li>
                        <li className="sectionbottom__li"><i className="sectionbottom__i fa-brands fa-css3-alt"></i></li>
                        <li className="sectionbottom__li"><i className="sectionbottom__i fa-brands fa-js"></i></li>
                    </ul>
                </footer>
            </section>
        </div>
    );
}
 
export default SectionLeft;