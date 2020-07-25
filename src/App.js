import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import Leccion from './components/Leccion/Leccion'
import Home from './components/Home'
import Index from './components/Index/Index'
import Informe from './components/Informe/Informe';

import './App.module.css';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        
        <Switch>
          <Route exact path="/" component={ Home } />

          <Route exact path="/index" component={ Index } />

          <Route exact path="/leccion/:numero" component={ Leccion } />

          <Route exact path="/informe/:id" component={ Informe } />         
        </Switch>

      </div>
    </Router>
  )
}

export default App

