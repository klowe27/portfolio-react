import React from 'react';
import AboutMe from './AboutMe';
import MyWork from './MyWork';
import Background from'./Background';
import Interests from './Interests';
import Contact from './Contact';
import StarsControl from './StarsControl'
import './assets/styles/styles.css';

function Homepage(){
  return (
    <div className="container" id="about">
      <StarsControl/>
      <AboutMe/>
      <MyWork/>
      <Background/>
      <Interests/>
      <Contact/>
    </div>
  );
}

export default Homepage;
