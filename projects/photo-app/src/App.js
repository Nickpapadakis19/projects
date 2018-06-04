import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import Header from './Screens/Header.js';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
