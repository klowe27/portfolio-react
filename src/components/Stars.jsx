import React from 'react';
import Star from './Star';
import {v4} from 'uuid';

class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state={};
    this.state.stars = this.generateStarList();
  }

  generateColor() {
    return `rgb(${this.randomNumber(255)}, ${this.randomNumber(255)}, ${this.randomNumber(255)})`;
  }
  
  randomNumber(max) {
    return Math.floor(Math.random()*max+1);
  }
  
  generateStarList(){
    let starList = [];
    for (let i=0; i < 500; i++) {
      let newColor = this.generateColor();
      let newLeft = this.randomNumber(window.innerWidth);
      let newTop = this.randomNumber(window.innerHeight);
      starList.push({color: newColor, left: newLeft, top: newTop});
    }
    return starList;
  }
  
  render() {
    return (
      <div>
        {this.state.stars.map((star) =>
          <Star 
            color={star.color}
            left={star.left}
            top={star.top}
            key={v4()}/>
        )}

      </div>
    );
  }
}

export default Stars;