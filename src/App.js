import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

// import NavBar from './components/NavBar/NavBar'
import Leccion from './components/Leccion/Leccion'
import Home from './components/Home'
import Index from './components/Index/Index'
import Informe from './components/Informe/Informe';

import AppContext from "./components/Context";

import { data } from "./lecciones.json";

const App = () => {
  return (
    <AppContext.Provider value={ data }>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/index" component={ Index } />
            <Route exact path="/leccion/:numero" component={ Leccion } />
            <Route exact path="/informe/:id" component={ Informe } />         
          </Switch>
        </div>
      </Router>
    </AppContext.Provider>
  )
}

export default App

