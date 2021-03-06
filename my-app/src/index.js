import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './Main';
import Academics from './Academics';
import WorkEx from './WorkEx';
import Projects from './Projects';
import TechSkills from './TechnicalSkills';
import * as serviceWorker from './serviceWorker';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/academics">
            <Academics />
          </Route>
          <Route path="/work-experience">
            <WorkEx />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/technical-skills">
            <TechSkills />
          </Route>
          <Route component={() => (<div>404 Not found </div>)} />
        </Switch>
      </div>
    </Router>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
