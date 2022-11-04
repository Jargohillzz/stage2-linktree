import Profile from "./Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Profile />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
