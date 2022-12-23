import "./EyeProject.css"
import SectionLeft from "./SectionLeft/SectionLeft"
import SectionRight from "./SectionRight/SectionRight"

const RekenenProject = () => {
    return ( 
        <main className="EyeProject__container">
            <article className="EyeProject__section__wrapper">
                <SectionLeft/>
                <SectionRight/>
            </article>
        </main>
     );
}
 
export default RekenenProject;