import React from 'react';
import AboutMe from './AboutMe';
import MyWork from './MyWork';
import Background from'./Background';
import Interests from './Interests';
import Contact from './Contact';
import 'materialize-css/dist/css/materialize.min.css';
import { Row } from 'react-materialize';
import './assets/styles/styles.css'

function Homepage(){
  return (
    <div className="container">
      <AboutMe/>
      <MyWork/>
      <Background/>
      <Interests/>
      <Contact/>
    </div>
  );
}

export default Homepage;
