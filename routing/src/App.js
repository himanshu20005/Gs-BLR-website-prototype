import React from "react";
import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Team from "./Team";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/team" component={Team} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="Homepage">
    <br />
    <h1>Home Page</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
      <br />
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </p>
  </div>
);

export default App;
