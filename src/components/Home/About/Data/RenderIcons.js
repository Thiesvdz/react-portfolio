import AboutIcons from "./AboutIcons"
import "../About.css"

const RenderIcons = () => {
    let aboutIconRendered = AboutIcons.map((Icon) => {
        return (
          <li className="about__text__li" key={Icon.id}>
            <i className={Icon.className} ></i>
          </li>
        );
      });
      
    return ( 

        <>
            <ul className="about__text__ul">{aboutIconRendered}</ul>
        </>
     );
}
 
export default RenderIcons;