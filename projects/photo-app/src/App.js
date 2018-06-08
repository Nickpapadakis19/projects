import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import firebase from 'firebase';
import './App.css';
import Header from './Screens/Header.js';
import Home from './Screens/Home.js';
import SignIn from './Screens/SignIn.js';
import Photo from './Screens/Photo.js';

var config = {
  apiKey: "AIzaSyBsTceUCv-JTVGh0MTMgJYZIMyUm1tWAG4",
  authDomain: "my-photo-app-62a09.firebaseapp.com",
  databaseURL: "https://my-photo-app-62a09.firebaseio.com",
  projectId: "my-photo-app-62a09",
  storageBucket: "my-photo-app-62a09.appspot.com",
  messagingSenderId: "592942362420"
};
let firebaseDB = firebase.initializeApp(config);

class App extends Component {
constructor(props){
  super(props)

  this.state = {
    user : {
      userID : '',
      password : '',
      email : '',
      date : new Date(),
      rating : ''

    },
    class : {
      class_one : 'fa fa-star star',
      class_two : 'fa fa-star star',
      class_three : 'fa fa-star star',
      class_four : 'fa fa-star star',
      class_five : 'fa fa-star star'
    }
  }
this.userRating = this.userRating.bind(this);
this.userInfo = this.userInfo.bind(this);
}

userInfo = (user) => {
  let state = this.state;

  state.user.userID = user.user;
  state.user.password = user.password;
  state.user.email = user.email;

  this.setState = ({state});

}

userRating = (event) => {
    let userId = event.target.id;
    let state = this.state
    switch(userId){

      case 'one':
        state.user.rating = 'One Star';
        state.class.class_one = 'fa fa-star star checked';
        state.class.class_two = 'fa fa-star star';
        state.class.class_three = 'fa fa-star star';
        state.class.class_four = 'fa fa-star star';
        state.class.class_five = 'fa fa-star star';
        this.setState = ({state});
        break;
      case 'two':
        state.user.rating = 'Two Stars';
        state.class.class_one = 'fa fa-star star checked';
        state.class.class_two = 'fa fa-star star checked';
        state.class.class_three = 'fa fa-star star';
        state.class.class_four = 'fa fa-star star';
        state.class.class_five = 'fa fa-star star';
        this.setState = ({state});
        break;
      case 'three':
        state.user.rating = 'Three Stars';
        state.class.class_one = 'fa fa-star star checked';
        state.class.class_two = 'fa fa-star star checked';
        state.class.class_three = 'fa fa-star star checked';
        state.class.class_four = 'fa fa-star star';
        state.class.class_five = 'fa fa-star star';
        this.setState = ({state});
        break;
      case 'four':
        state.user.rating = 'Four Stars';
        state.class.class_one = 'fa fa-star star checked';
        state.class.class_two = 'fa fa-star star checked';
        state.class.class_three = 'fa fa-star star checked';
        state.class.class_four = 'fa fa-star star checked';
        state.class.class_five = 'fa fa-star star';
        this.setState = ({state});
        break;
      case 'five':
        state.user.rating = 'Five Stars';
        state.class.class_one = 'fa fa-star star checked';
        state.class.class_two = 'fa fa-star star checked';
        state.class.class_three = 'fa fa-star star checked';
        state.class.class_four = 'fa fa-star star checked';
        state.class.class_five = 'fa fa-star star checked';
        this.setState = ({state});
        break;

    }
  }

  sendData = () => {
    let db = firebaseDB.database().ref('user');
    db.push(this.state.user);
  }

  render() {
    return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact={true} path="/" component={Home} />
        <Route path="/SignIn" render={() => (
          <SignIn sendInfo={this.userInfo} />
        )} />
        <Route path="/Photo" render={() => (
        <Photo rate={this.userRating} class={this.state.class} user={this.state.user.userID} send={this.sendData}/>
        )} />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
