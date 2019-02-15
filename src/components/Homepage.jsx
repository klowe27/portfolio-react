import React from 'react';
import AboutMe from './AboutMe'
import Contact from './Contact'
import 'materialize-css/dist/css/materialize.min.css';
import { Row } from 'react-materialize';

function Homepage(){
  return (
    <div>
      <AboutMe/>
      <Contact/>
    </div>
  );
}

export default Homepage;
