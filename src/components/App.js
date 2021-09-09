import "./App.css";
import React from "react";
import Header from "./header/Header";
import Accueil from "./accueil/Accueil.js";
import Accommodation from "./accommodation/Accommodation";
import About from "./about/About";
import Error404 from "./error404/Error404";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Accueil} />
            <Route path="/accommodation" component={Accommodation} />
            <Route path="/about" component={About} />
            <Route path="/" component={Error404} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;