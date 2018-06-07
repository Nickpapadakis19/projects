import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import photo from '../photo.jpg'


class Photo extends Component {
constructor(props){
  super(props)

this.state = {
  rating: {
    stars : '',
    date : new Date()
  },
  class : true
}
this.userRating = this.userRating.bind(this);
}

userRating = (event) => {
    let userId = event.target.id;

    switch(userId){
      case 'one':
        this.setState = ({ stars : 'One Stars',
        class : false })
        break;
      case 'two':
        this.setState = ({ stars : 'Two Stars'})
        break;
      case 'three':
        this.setState = ({stars : 'Three Stars'})
        break;
      case 'four':
        this.setState = ({stars : 'Four Stars'})
        break;
      case 'five':
        this.setState = ({stars : 'Five Stars'})
        break;
    }
  }



  render(){
  let btn_class = this.state.class ? "fa fa-star star" : "fa fa-star star checked";
    return(
      <div id="photo-div">
        <img id="photo" src={photo}  alt="Landscape"/>
        <div id="star-div">
          <h3>Rate Today's Photo</h3>
          <button id="one" className={btn_class} onClick={this.userRating}></button>
          <button id="two" className="fa fa-star star" onClick={this.userRating}></button>
          <button id="three" className="fa fa-star star" onClick={this.userRating}></button>
          <button id="four" className="fa fa-star star" onClick={this.userRating}></button>
          <button id="five" className="fa fa-star star" onClick={this.userRating}></button>
        </div>
      </div>


    )
  }
}

export default Photo;
