import React, { Component } from 'react';
import './App.css';
import Construction from './components/construction.js'
import Contact from './components/contact.js'


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Construction />
        <Contact /> 
      </div>
    );
  }
}

export default App;

// TODO favicon
// contact images white