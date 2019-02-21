import React from 'react';
import AboutMe from './AboutMe';
import MyWork from './MyWork';
import Background from'./Background';
import Interests from './Interests';
import Contact from './Contact';
import Stars from './Stars';
import './assets/styles/darkstyles.css';

function Homepage(){
  return (
    <div className='container' id='about'>
      <Stars/>
      <AboutMe/>
      <MyWork/>
      <Background/>
      <Interests/>
      <Contact/>
    </div>
  );
}

export default Homepage;
