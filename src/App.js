import React, { useEffect } from 'react';
import './App.css';

import Hero from './pages/heroPage/hero';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Schedule from './pages/schedule/schedule';
import Resources from './pages/resources/resources';

import Aos from 'aos';

function App () {

  useEffect( () => {
    Aos.init( { duration: 1200 } );
  } );

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/team' component={ () => {
            window.location.href = 'https://sachacks.typeform.com/to/r2sYTJ';
            return null;
          } } />
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
