import ProjectData from "./ProjectData/ProjectData";
import "./Projects.css"
// import {Link} from "react-router-dom";
import {
  Link,
  Switch,
  Route,
  useParams,
  useRouteMatch
} from "react-router-dom";
const Projects = () => {

  let { path, url } = useRouteMatch();
  let { topicId } = useParams();

  let projectCardToBeRenderd = ProjectData.map((data) => {
    return (
      <article className= {data.classNameArticle + " project__article"} key={data.id} >
        <header className={data.classNameHeader + " project__header"}>
          <figure className="project__figure">
            <Link to={"/projectpage" + data.link}> <img src={data.image} alt="" className="project__image" /></Link>
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

      // <Switch>
      //   <Route path={`${path}` + data.link}>
      //     {/* <Topic /> */}
      //   </Route>
      // </Switch>


  return <section className="project__section" id="Projecten">
      <div className="project__wrapper">
        {projectCardToBeRenderd}
      </div>
      </section>;
};

export default Projects;
