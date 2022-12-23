import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import RekenProject from "../components/ProjectPages/RekenProject/RekenProject";
import Footer from "../components/ProjectPages/RekenProject/Footer/Footer";
import EyeProject from "../components/ProjectPages/Eye/EyeProject";

const ProjectPage = () => {  
    
    let { path } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${path}/rekenproject`}>
            <RekenProject />
            <Footer h1="Javascript reken project" />
        </Route>
        <Route path={`${path}/:eyeproject`}>
            <EyeProject/>
            <Footer h1="Eye museum reken project" />
        </Route>
        {/* <Route path={`${path}/:projectId`}></Route> */}
        {/* <Route path={`${path}/:projectId`}></Route> */}
      </Switch>
    
    </>
  );
};

export default ProjectPage;
