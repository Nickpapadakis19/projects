import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';
import Header from './Screens/Header.js';
import Home from './Screens/Home.js';
import SignIn from './Screens/SignIn.js';

class App extends Component {



  render() {
    return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact={true} path="/" component={Home} />
        <Route path="/SignIn" component={SignIn} />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
