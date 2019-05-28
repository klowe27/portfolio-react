import React from 'react';
import Star from './Star';
import {v4} from 'uuid';

function StarList() {
  function generateColor() {
    return `rgb(${randomNumber(1, 255)}, ${randomNumber(1, 255)}, ${randomNumber(1, 255)})`;
  }

  function randomNumber(min, max) {
    return Math.floor(Math.random()*max+min);
  }

  function generateStarList(){
    let starList = [];
    for (let i=0; i < 100; i++) {
      let newColor = generateColor();
      let newLeft = randomNumber(-30, window.innerWidth);
      let newTop = randomNumber(-30, window.innerHeight);
      let newDuration = randomNumber(20, 80);
      starList.push({color: newColor, left: newLeft, top: newTop, duration: newDuration});
    }
    return starList;
  }

  return (
    <div>
      {generateStarList().map((star) =>
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

export default StarList;
