import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import photo from '../photo.jpg'


class Photo extends Component {

  render(){
    return(
      <div>
        <img id="photo" src={photo}  alt="Landscape"/>
      </div>


    )
  }
}

export default Photo;
