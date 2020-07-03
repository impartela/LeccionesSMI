import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import Leccion from './components/Leccion'
import Home from './components/Home'
import Index from './components/Index/Index'

import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <NavBar />
            
            <Switch>
              <Route exact path="/leccion/:numero">
                <Leccion />
              </Route>
              <Route exact path="/index">
                <Index />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>

          </div>
        </Router>
    )
  }
}

export default App;
