import React from 'react';
import Star from './Star';
import {v4} from 'uuid';

class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state={};
    this.state.stars = [];
    this.generateStarList(1);
    this.addStars = null;
    this.generateStarList = this.generateStarList.bind(this);
  }
  
  componentDidMount() {
    this.addStars = setInterval(this.generateStarList(2), 100);
  }

  componentWillUnmount() {
    clearInterval(this.addStars);
  }

  generateColor() {
    return `rgb(${this.randomNumber(255)}, ${this.randomNumber(255)}, ${this.randomNumber(255)})`;
  }
  
  randomNumber(max) {
    return Math.floor(Math.random()*max+1);
  }
  
  generateStarList(number){
    let starList = this.state.stars;
    for (let i=0; i < number; i++) {
      let newColor = this.generateColor();
      let newLeft = this.randomNumber(window.innerWidth);
      let newTop = this.randomNumber(window.innerHeight);
      starList.push({color: newColor, left: newLeft, top: newTop});
    }
    this.setState({stars: starList});
    console.log(this.state.stars);
  }
  
  render() {
    return (
      <div className='starContainer'>
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