import React from 'react';
import ProfileImage from './assets/images/profile.jpg';
import { Content } from './assets/content.js';

function AboutMe(){
  return (
    <div className="space-above center">
      <img  className="headshot" src={ProfileImage} alt="Profile image"/>
      <h2 id="work">About Me</h2>
      <p>{Content.bio}</p>
    </div>
  );
}

export default AboutMe;
