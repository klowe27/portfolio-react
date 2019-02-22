import React from 'react';
import Star from './Star';
import {v4} from 'uuid';

class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state={};
    this.state.stars = [];
    this.generateStarList();
  }

  generateColor() {
    return `rgb(${this.randomNumber(1, 255)}, ${this.randomNumber(1, 255)}, ${this.randomNumber(1, 255)})`;
  }
  
  randomNumber(min, max) {
    return Math.floor(Math.random()*max+min);
  }
  
  generateStarList(){
    let starList = this.state.stars;
    for (let i=0; i < 100; i++) {
      let newColor = this.generateColor();
      let newLeft = this.randomNumber(1, window.innerWidth);
      let newTop = this.randomNumber(1, window.innerHeight);
      let newDuration = this.randomNumber(50, 100);
      starList.push({color: newColor, left: newLeft, top: newTop, duration: newDuration});
    }
    this.setState({stars: starList});
  }
  
  render() {
    return (
      <div>
        {this.state.stars.map((star) =>
          <Star 
            color={star.color}
            left={star.left}
            top={star.top}
            duration = {star.duration}
            key={v4()}/>
        )}
      </div>
    );
  }
}

export default Stars;