import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../header.png';

class SignIn extends Component{

  render(){
    return(
      <div id="outer-div">
        <div id="inner-div">
            <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
            <h3>User Name</h3>
            <input type="text" />
            <h3>Password</h3>
            <input type="password" />
            <div id="button-div">
             <button>Sign-in</button>
             <Link to="/"><button>Cancel</button></Link>
            </div>
        </div>
      </div>

    )
  }
}

export default SignIn;
