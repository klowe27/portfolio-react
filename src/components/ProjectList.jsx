import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Project from './Project';
import { ProjectListContent } from './assets/content.js';
import { v4 } from 'uuid';

function ProjectList() {

  return(
    <div className='space-above' id='work'>
      <h2>My Work</h2>
      <div className='content-container'>
        {ProjectListContent.map((project) =>
          <Project
            image={project.image}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
            key={v4()}/>
        )}
      </div>
    </div>
  );
}

export default ProjectList;
