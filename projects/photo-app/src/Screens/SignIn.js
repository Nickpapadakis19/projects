import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../header.png';

class SignIn extends Component{

  render(){
    return(
      <div id="outer-div">
        <div id="inner-div">
            <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
            <h5>Username: &nbsp;
            <input type="text" className="input"/>
            </h5>
            <h5>Password: &nbsp;
            <input type="password"  className="input"/>
            </h5>
            <div id="button-div">
             <Link to="/Photo"><button id="sign-btn">Sign-in</button></Link>
             <Link to="/"><button id="cancel">Cancel</button></Link>
            </div>
        </div>
      </div>

    )
  }
}

export default SignIn;
