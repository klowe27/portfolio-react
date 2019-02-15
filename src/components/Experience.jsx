import React from 'react';
import { Icon } from 'react-materialize';

function Experience() {
  return(
    <div className="content-container">
      <div className="content content-body">
        <Icon>card_travel</Icon>
        <h3>Experience</h3>
        <h4>Product Marketing Manager</h4>
        <p>NWEA, 4.2018–8.2018</p>
        <h4>Marketing Manager</h4>
        <p>Open Mesh, 9.2016–3.2018</p>
        <h4>Marketing Manager</h4>
        <p>InComm Digital Solutions, 3.2012–8.2016</p>
      </div>
      <div className="content content-body">
        <Icon>bookmark</Icon>
        <h3>Education</h3>
        <h4>Web Development Code School</h4>
        <p>Epicodus, 2018–2019</p>
        <h4>MA, English</h4>
        <p>BYU, 2009–2011</p>
        <h4>BA, English</h4>
        <p>BYU, 2004–2008</p>
      </div>
      <div className="content content-body">
        <Icon>description</Icon>
        <h3>Skills</h3>
        <ul>
          <li>Javascript, React, Angular, Ruby/Rails, jQuery, HTML, CSS, Git, TDD, pair programming</li><br/>
          <li>InDesign, Photoshop and Illustrator
          Google Analytics, SEO, Google Adwords, Mailchimp, and Salesforce</li><br/>
          <li>Superior communication, writing and design skills</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
