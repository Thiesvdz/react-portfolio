import "../ProjectTemplate/Template.css";
import "./RekenProject.css";
import SectionLeft from "./SectionLeft/SectionLeft";
import SectionRight from "./SectionRight/SectionRight";

const RekenenProject = () => {
    return ( 
        <main className="RekenProject__container Template__container">
            <article className="RekenProject__section__wrapper Template__section__wrapper">
                
                <SectionLeft/>
                <SectionRight/>
            </article>
        </main>
     );
}
 
export default RekenenProject;