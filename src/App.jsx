import './App.css';

import React from 'react'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Inscribete from './componentes/Inscribete';
import Principal from './componentes/Principal';
import About from './componentes/About';
import Dietas from './componentes/Dietas';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dietas" component={Dietas}/>
        <Route path="/inscribete" component={Inscribete}/>
        <Route exact path="/" component={Principal}/>
        <Route path="/about" component={About}/>
      </Switch>
    </Router>
  );
}

export default App;
