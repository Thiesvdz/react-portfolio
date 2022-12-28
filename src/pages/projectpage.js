import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import RekenProject from "../components/ProjectPages/RekenProject/RekenProject";
import Footer from "../components/ProjectPages/RekenProject/Footer/Footer";
import EyeProject from "../components/ProjectPages/Eye/EyeProject";
import Duurzaamhuis from "../components/ProjectPages/DuurzaamHuis/DuurzaamHuisProject"
import ClipNDip from "../components/ProjectPages/ClipNDip/ClipNDipProject"
import Navbar from "../components/Home/Navigation/Navigation"

const ProjectPage = () => {  
    
    let { path } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${path}/rekenproject`}>
        <Navbar></Navbar>
            <RekenProject />
            <Footer h1="Javascript rekenen" />
        </Route>
        <Route path={`${path}/eyeproject`}>
            <EyeProject/>
            <Footer h1="Eye museum" />
        </Route>
        <Route path={`${path}/duurzaamhuis`}>
            <Duurzaamhuis/>
            <Footer h1="Duurzaam huis" />
        </Route>
        <Route path={`${path}/clip-n-dip`}>
            <ClipNDip/>
            <Footer h1="clip-n-dip" />
        </Route>
      </Switch>
    
    </>
  );
};

export default ProjectPage;
