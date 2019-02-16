
import React from 'react';

class StarsControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showStars: true
    };
  }

  createStars() {
    const height = window.innerWidth;
    const width = window.innerHeight;
    let stars = "";
    for (let i = 0; i < 350; i++) {
      stars += `<span class="star" style="left: ${this.randomNumber(width)}px; bottom: ${this.randomNumber(height)}px; background-color: rgb(${this.randomNumber(255)}, ${this.randomNumber(255)}, ${this.randomNumber(255)});"></span>`;
    }
    document.body.appendChild(stars);
  }

  randomNumber(max) {
    return Math.floor(Math.random()*max+1);
  }

  render(){
    return (
      <div>
        document.body.appendChild({this.createstars});
      </div>
    );
  }
}

export default StarsControl;
