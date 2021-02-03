import './App.css';
import './estilos.css';

import React from 'react'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Inscribete from './componentes/Inscribete';
import Principal from './componentes/Principal';
import About from './componentes/About';
import Dietas from './componentes/Dietas';
import Login from './componentes/Login';
import User from './componentes/User';
import Admin from './componentes/Admin';
import Regis from './componentes/Regis';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dietas" component={Dietas}/>
        <Route path="/inscribete" component={Inscribete}/>
        <Route exact path="/" component={Principal}/>
        <Route path="/about" component={About}/>
        <Route exact path="/login" component={Login}/>
        <Route path="/login/usuario" component={User}/>
        <Route path="/login/admin" component={Admin}/>
        <Route path="/regis" component={Regis}/>
      </Switch>
    </Router>
  );
}

export default App;
