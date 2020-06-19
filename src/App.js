import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header.js'
import Home from './components/home.js'
import Algorithms from './components/projects/algorithms.js';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Header /> 
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/Projects/algorithms'>
              <Algorithms/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
