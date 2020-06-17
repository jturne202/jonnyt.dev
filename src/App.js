import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js'
import About from './components/about.js';
import Projects from './components/projects.js'
import Contact from './components/contact.js'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header /> 
        <div className='content'>
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
