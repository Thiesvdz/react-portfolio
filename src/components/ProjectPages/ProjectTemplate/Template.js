import "./Template.css"
import SectionLeft from "./SectionLeft/SectionLeft"
import SectionRight from "./SectionRight/SectionRight"

const Template = () => {
    return ( 
        <main className="Template__container">
            <article className="Template__section__wrapper">
                <SectionLeft/>
                <SectionRight/>
            </article>
        </main>
     );
}
 
export default Template; 