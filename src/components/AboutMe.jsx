import React from 'react';
import ProfileImage from './assets/images/profile.jpg';
import { Content } from './assets/content.js';
import './assets/styles/AboutMe.css';

function AboutMe(){
  return (
    <div className='space-above center' id='about'>
      <img  className='headshot' src={ProfileImage} alt='Profile image'/>
      <h2>About Me</h2>
      <p className='bio'>{Content.bio}</p>
    </div>
  );
}

export default AboutMe;
