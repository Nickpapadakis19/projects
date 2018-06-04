import React, { PropTypes } from 'react';
import logo from '../header.png';
import { Link } from 'react-router-dom';

const  Header = () => {
  return(
    <header className="App-header">
      <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
      <h1 className="App-title">Photo Of The Day</h1>
    </header>
  )
}

export default Header;
