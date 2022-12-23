import "../ProjectTemplate/Template.css";
import "./EyeProject.css";
import SectionLeft from "./SectionLeft/SectionLeft";
import SectionRight from "./SectionRight/SectionRight";

const EyeProject = () => {
    return ( 
        <main className="EyeProject__container Template__container">
            <article className="EyeProject__section__wrapper Template__section__wrapper">
                <SectionLeft/>
                <SectionRight/>
            </article>
        </main>
     );
}
 
export default EyeProject;