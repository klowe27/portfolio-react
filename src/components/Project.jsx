import React from 'react';
import PropTypes from 'prop-types';
import Food from './assets/images/food.png'
import Stonewall from './assets/images/stonewall.png'
import Charity from './assets/images/charity-frog.png'
import Mastermind from './assets/images/mastermind.png'

function Project({image, name, description, technologies, link}){
  return(
    <div>
      <img src={image} alt={name}/>
      <h3>{name}</h3>
      <p>Description: {description}</p>
      <p>Technologies: {technologies}</p>
      <a href={link}><button>View</button></a>
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
