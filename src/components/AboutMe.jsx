import React from 'react';
import ProfileImage from './assets/images/profile.jpg';
import { Content } from './assets/content.js';
import styles from './assets/styles/AboutMe.css';

function AboutMe(){
  return (
    <div className='space-above center'>
      <img  className='headshot' src={ProfileImage} alt='Profile image'/>
      <h2>About Me</h2>
      <p className='about-me'>{Content.bio}</p>
    </div>
  );
}

export default AboutMe;
