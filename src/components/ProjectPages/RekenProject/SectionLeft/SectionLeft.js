import "./SectionLeft.css"

const SectionLeft = () => {
    return ( 
        <div className="sectionLeft__wrapper">
            <section className="sectiontop__section">
                <figure className="sectiontop__figure">
                    <img src="" alt="" className="sectiontop__image__slider"/>
                </figure>
            </section>
            <section className="sectionbottom__section">
                <header className="sectionbottom__header">
            
                </header>
                <footer className="sectionbottom__footer">
                    <ul className="sectionbottom__ul">
                        <li className="sectionbottom__li"><i className="sectionbottom__i">1</i></li>
                        <li className="sectionbottom__li"><i className="sectionbottom__i">2</i></li>
                        <li className="sectionbottom__li"><i className="sectionbottom__i">3</i></li>
                    </ul>
                </footer>
            </section>
        </div>
    );
}
 
export default SectionLeft;