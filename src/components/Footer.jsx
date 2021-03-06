import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import LinkedIn from './assets/images/linkedIn.svg';
import Github from './assets/images/github.svg';
import { Content } from './assets/content.js';
import './assets/styles/Footer.css';

function Footer(){
  return (
    <div className='space-above center' id='contact'>
      <div className="contact">
        <p><a href='mailto:kristin.lowe1@gmail.com'>{Content.email}</a><br/>
          {Content.phone}</p>
        <div>
          <a href={Content.linkedin} target='blank'><img src={LinkedIn} className='socialIcon'/></a>
          <a href={Content.github} target='blank'><img src={Github} className='socialIcon'/></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
