import "./TijdLijnItem.css";
import "../../../ProjectTemplate/SectionRight/TijdLijnItem/TemplateTijdLijnItem.css";

const TijdLijnItem = (props) => {
    return ( 
        <>
            <div class="tijdlijn__items">
                <div class="tijdlijn__item">
                    <div class="tijdlijn__dot__clip"></div>
                    <div class="tijdlijn__date__clip">{props.tijdlijn__date}</div>

                    <div class="tijdlijn__content">
                        <h3>{props.tijdlijn__h3}</h3>
                        <p>{props.tijdlijn__p}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default TijdLijnItem;