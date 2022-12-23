import "../ProjectTemplate/Template.css";
import "./DuurzaamHuisProject.css";
import SectionLeft from "./SectionLeft/SectionLeft";
import SectionRight from "./SectionRight/SectionRight";

const DuurzaamHuis = () => {
    return ( 
        <main className="DuurzaamHuis__container Template__container">
            <article className="DuurzaamHuis__section__wrapper Template__section__wrapper">
                <SectionLeft/>
                <SectionRight/>
            </article>
        </main>
     );
}
 
export default DuurzaamHuis;