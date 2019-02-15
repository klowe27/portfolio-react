import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Icon } from 'react-materialize';
import LinkedIn from './assets/images/linkedIn.svg'
import Github from './assets/images/github.svg'
import './assets/styles/styles.css'


function Contact(){
  return (
    <div className="space-above center">
      <h2>Contact</h2>
      <p><a href="mailto:kristin.lowe1@gmail.com">kristin.lowe1@gmail.com</a><br/>
      360.910.2110</p>
      <div>
        <a href='https://www.linkedin.com/in/kristin-brewer-lowe/' target='blank'><img src={LinkedIn} className="socialIcon"/></a>
        <a href='https://github.com/klowe27' target='blank'><img src={Github} className="socialIcon"/></a>
      </div>
    </div>
  );
}

export default Contact;
