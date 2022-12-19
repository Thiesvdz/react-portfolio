import ProjectData from "./ProjectData/ProjectData";
import "./Projects.css"

const Projects = () => {
  let projectCardToBeRenderd = ProjectData.map((data) => {
    return (
      <article className= {data.classNameArticle + " project__article"} id="Projecten" >
        <header className={data.classNameHeader + " project__header"}>
          <figure className="project__figure">
            <img src={data.image} alt="" className="project__image" />
          </figure>
        </header>
        <footer className="project__footer">
          <ul className="project__ul">
            <i className={data.icons1}><a href=""></a></i>
            <i className={data.icons2}></i>
            <i className={data.icons3}></i>
          </ul>
        </footer>
      </article>
    );
  });

  return <section className="project__section">
      <div className="project__wrapper">
        {projectCardToBeRenderd}
      </div>
      </section>;
};

export default Projects;
