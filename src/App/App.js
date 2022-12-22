import "./App.css";
import Homepage from "../pages/homepage";
import Test from "../components/ProjectPages/Test";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/Test">
          <Test/>
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
