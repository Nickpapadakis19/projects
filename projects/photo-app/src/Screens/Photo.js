import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import photo from '../photo.jpg'


class Photo extends Component {
constructor(props){
  super(props)

}

  render(){

    return(
      <div id="photo-div">
        <img id="photo" src={photo}  alt="Landscape"/>
        <div id="star-div">
          <h3>Rate Today's Photo</h3>
          <Link to="/Photo"><button id="one" className={this.props.class.class_one} onClick={this.props.rate}></button></Link>
          <Link to="/Photo"><button id="two" className={this.props.class.class_two} onClick={this.props.rate}></button></Link>
          <Link to="/Photo"><button id="three" className={this.props.class.class_three} onClick={this.props.rate}></button></Link>
          <Link to="/Photo"><button id="four" className={this.props.class.class_four} onClick={this.props.rate}></button></Link>
          <Link to="/Photo"><button id="five" className={this.props.class.class_five} onClick={this.props.rate}></button></Link>
        </div>
        <div>
          <button id="photo-rate">Rate</button>
          <Link to="/"><button id="photo-cancel">Cancel</button></Link>

        </div>
      </div>


    )
  }
}

export default Photo;
