import "./App.css";
import Homepage from "../pages/homepage";
// import RekenProject from "../components/ProjectPages/RekenProject/RekenProject"
import Projectpage from "../pages/projectpage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/projectpage">
          <Projectpage/>
        </Route>
        <Route exact path="/">
          <Homepage/>
        </Route>
      </Switch>
   </Router>
  );
};

export default App;
