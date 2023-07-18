import "./App.css";
import Navbar from "./navbar";
import Home from "./home";
import Create from "./Creat";
import BlogDetailes from "./BlogDetailes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blog/:id">
              <BlogDetailes />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
