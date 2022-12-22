import "./App.css";
import Homepage from "../pages/homepage";
import RekenProject from "../components/ProjectPages/RekenProject/RekenProject"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/RekenProject">
          <RekenProject/>
        </Route>
        <Route exact path="/">
          <Homepage/>
        </Route>
        {/* <Route path="/" component={}></Route> */}
        {/* <Route path="/" component={}></Route> */}
      </Switch>
   </Router>
  );
};

export default App;
