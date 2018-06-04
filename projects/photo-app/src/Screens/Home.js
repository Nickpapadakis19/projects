import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{

  render(){
    return (
      <div id="home-div">
        <h1 id="home-info">Sign in to rate todays photo</h1>
        <Link to="/SignIn"><button type="button" id="sign-in">Sign-In</button></Link>
      </div>

    )

  }
}

export default Home;
