import React from 'react';
import './App.css';

import Hero from './pages/heroPage/hero';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Schedule from './pages/schedule/schedule';
import Resources from './pages/resources/resources';

function App () {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/schedule">
            <Schedule />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path='/'>
            <Hero />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
