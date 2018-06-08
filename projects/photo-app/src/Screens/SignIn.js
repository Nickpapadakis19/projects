import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../header.png';

class SignIn extends Component{
constructor(props){
  super(props)

  this.userID = React.createRef();
  this.password = React.createRef();
  this.userEmail = React.createRef();

}

sendInfo = () => {
  let userName = this.userID.current.value;
  let password = this.password.current.value;
  let userEmail = this.userEmail.current.value;


  let userInfo = {
    user : userName,
    password : password,
    email : userEmail
  }

  this.props.sendInfo(userInfo);
}

  render(){
    return(
      <div id="outer-div">
        <div id="inner-div">
            <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
            <h5>Email Address:
            <input id="email" type="email" className="input" ref={this.userEmail}/>
            </h5>
            <h5>Username: &nbsp;
            <input id="userId" type="text" className="input" ref={this.userID}/>
            </h5>
            <h5>Password: &nbsp;
            <input id="password" type="password"  className="input" ref={this.password}/>
            </h5>
            <div id="button-div">
             <Link to="/Photo"><button id="sign-btn" onClick={this.sendInfo}>Sign-in</button></Link>
             <Link to="/"><button id="cancel">Cancel</button></Link>
            </div>
        </div>
      </div>

    )
  }
}

export default SignIn;
