import React from 'react';
import AboutMe from './AboutMe';
import ProjectList from './ProjectList';
import Background from'./Background';
import InterestList from './InterestList';
import Contact from './Contact';
import './assets/styles/darkstyles.css';

function Homepage(){
  return (
    <div className='container' id='about'>
      <AboutMe/>
      <ProjectList/>
      <Background/>
      <InterestList/>
      <Contact/>
    </div>
  );
}

export default Homepage;
