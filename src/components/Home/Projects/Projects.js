import ProjectData from "./ProjectData/ProjectData";
import "./Projects.css"
import {Link} from "react-router-dom";

const Projects = () => {
  let projectCardToBeRenderd = ProjectData.map((data) => {
    return (
      <article className= {data.classNameArticle + " project__article"} >
        <header className={data.classNameHeader + " project__header"}>
          <figure className="project__figure">
            <Link to="/RekenProject"> <img src={data.image} alt="" className="project__image" /></Link>
          </figure>
        </header>
        <footer className="project__footer">
          <ul className="project__ul">
           <i className={data.icons1}></i>
            <i className={data.icons2}><a href=""></a></i>
            <i className={data.icons3}><a href=""></a></i>
          </ul>
        </footer>
      </article>
    );
  });

  return <section className="project__section" id="Projecten">
      <div className="project__wrapper">
        {projectCardToBeRenderd}
      </div>
      </section>;
};

export default Projects;
