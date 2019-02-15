import React from 'react';
import AboutMe from './AboutMe'
import Interests from './Interests'
import Contact from './Contact'
import 'materialize-css/dist/css/materialize.min.css';
import { Row } from 'react-materialize';

function Homepage(){
  return (
    <div>
      <AboutMe/>
      <Interests/>
      <Contact/>
    </div>
  );
}

export default Homepage;
