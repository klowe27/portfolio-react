import React from 'react';
import PropTypes from 'prop-types';
import { MediaBox, Button, Icon } from 'react-materialize';
import './assets/styles/Project.css';

function Project({image, name, description, technologies, link}){
  return(
    <div className='content'>
      <MediaBox src={require(`./assets/images/${image}.png`)} caption={name} className='img-fluid' alt={name}/>
      <div className='content-body'>
        <h3>{name}</h3>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Technologies:</strong> {technologies}</p>
        <a href={link} target='blank'><Button waves='light' className='work-button'>View<Icon right>link</Icon></Button></a>
      </div>
    </div>
  );
}

Project.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default Project;
