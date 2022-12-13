import "./SkillsCard.css"
import SkillsData from "../Data/SkillsData"

const SkillsCard = (props) => {

    let skillsCardToBeRenderd = SkillsData.map(data=>{
        return(
            <article className="article__skills__card">
                <header className="article__skills__header">
                    <figure className="article__image__container">
                        <img src={data.image} alt="html icon" className="article__image"/>
                    </figure>
                </header>
                <footer className="article__skills__footer">
                    <h2 className="article__skills__h2">
                        {data.title}
                    </h2>
                    <p className="article__skills__p">
                        {data.description}
                    </p>
                </footer>
            </article>
            )
    })
    return(
        <>
            {skillsCardToBeRenderd}
        </>
    )
}

export default SkillsCard