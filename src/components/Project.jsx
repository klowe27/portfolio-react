import React from 'react';
import PropTypes from 'prop-types';
import Food from './assets/images/food.png'
import Stonewall from './assets/images/stonewall.png'
import Charity from './assets/images/charity-frog.png'
import Mastermind from './assets/images/mastermind.png'
import 'materialize-css/dist/css/materialize.min.css';
import { MediaBox, Button, Icon } from 'react-materialize';

function Project({image, name, description, technologies, link}){
  return(
    <div className="content">
      <MediaBox src={Food} caption={name} className="img-fluid" alt={name}/>
      <div className="content-body">
        <h3>{name}</h3>
        <p>Description: {description}</p>
        <p>Technologies: {technologies}</p>
        <a href={link} target="blank"><Button waves='light' className="work-button">View<Icon right>link</Icon></Button></a>
      </div>
    </div>
  );
}

Project.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default Project;
