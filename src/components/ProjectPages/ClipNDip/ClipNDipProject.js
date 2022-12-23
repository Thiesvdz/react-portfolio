import "../ProjectTemplate/Template.css";
import "./ClipNDipProject.css";
import SectionLeft from "./SectionLeft/SectionLeft";
import SectionRight from "./SectionRight/SectionRight";

const ClipNDip = () => {
    return ( 
        <main className="ClipNDip__container Template__container">
            <article className="ClipNDip__section__wrapper Template__section__wrapper">
                <SectionLeft/>
                <SectionRight/>
            </article>
        </main>
     );
}
 
export default ClipNDip;