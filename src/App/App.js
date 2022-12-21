import "./App.css";
import Homepage from "../pages/homepage";
import Test from "../components/ProjectPages/Test";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Homepage}></Route>
        <Route path="/Test" component={Test}></Route>
        {/* <Route path="/" component={}></Route> */}
        {/* <Route path="/" component={}></Route> */}
      </Switch>
    </Router>
  );
};

export default App;
