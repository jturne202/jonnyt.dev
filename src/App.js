import React, { Component } from 'react';
import './App.css';
import About from './components/about.js';
import Contact from './components/contact.js'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='content'>
          <About />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
