import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

  render() {
    
    return (
        
      <div className="ficha">
          <h1>{this.props.name}</h1>
          <h2>{this.props.species}</h2>
          <img src={this.props.image} alt="character rick and morty"></img>
      </div>
    );
  }
  
}

export default Card;