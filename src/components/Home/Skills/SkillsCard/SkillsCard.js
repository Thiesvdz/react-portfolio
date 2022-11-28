import "./SkillsCard.css"


const SkillsCard = (props) => {
    return(
            <article className="article__skills__card">
                <header className="article__skills__header">
                    <figure className="article__image__container">
                        <img src={props.skillsImage} alt="html icon" className="article__image"/>
                    </figure>
                </header>
                <footer className="article__skills__footer">
                    <h2 className="article__skills__h2">
                        {props.skillsH2}
                    </h2>
                    <p className="article__skills__p">
                        {props.skillsP}
                    </p>
                </footer>
            </article>
    )
}

export default SkillsCard