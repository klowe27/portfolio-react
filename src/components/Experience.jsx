import React from 'react';
import { Icon } from 'react-materialize';
import { ExperienceList, EducationList, SkillsList  } from './assets/content.js';
import {v4} from 'uuid';

function Experience() {
  return(
    <div className='content-container'>
      <div className='content content-body'>
        <Icon>card_travel</Icon>
        <h3>Experience</h3>
        {ExperienceList.map((experience)=>
          <div key={v4()}>
            <h4>{experience.title}</h4>
            <p>{experience.company}</p>
          </div>
        )}
      </div>
      <div className='content content-body'>
        <Icon>bookmark</Icon>
        <h3>Education</h3>
        {EducationList.map((education)=>
          <div key={v4()}>
            <h4>{education.degree}</h4>
            <p>{education.school}</p>
          </div>
        )}
      </div>
      <div className='content content-body'>
        <Icon>description</Icon>
        <h3>Skills</h3>
        <ul>
          {SkillsList.map((skillList)=>
            <div key={v4()}>
              <li>{skillList}</li><br/>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Experience;
