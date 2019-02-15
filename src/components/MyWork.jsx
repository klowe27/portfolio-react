import React from 'react';
import Project from './Project';
import Food from './assets/images/food.png';
import Stonewall from './assets/images/stonewall.png';
import Charity from './assets/images/charity-frog.png';
import Mastermind from './assets/images/mastermind.png';
import 'materialize-css/dist/css/materialize.min.css';

function Interests() {
  const projects = [
    {
      image: Food,
      name: 'Food Savor',
      description: 'With a small group, I created a web app to let users search for recipes based on expiring ingredients in order to reduce food waste. I designed the UI, parsed and displayed the API response, and was heavily involved in the site architecture.',
      technologies: ['Pod Save America', 'Serial', 'The Daily', 'Reply All'],
      link: 'https://foodsavorapp-b49fd.firebaseapp.com/'
    },
    {
      image: Stonewall,
      name: 'Stonewall Wears',
      description: 'This is an e-commerce site where users can browse products and add them to their cart. Users can log-in with their Google account to save their cart for later.',
      technologies: 'Angular, Firebase, Firebase Authentication, Typescript and Git',
      link: 'https://stonewall-wears.firebaseapp.com/'
    },
    {
      image: Charity,
      name: 'Charity Frog',
      description: 'With a small group, I created a Ruby/Rails app where users can select from a list of charities to donate to. I designed the UI and heavily contributed to the architecture of the site, strategically planning data tables and routing.',
      technologies: 'Ruby, Rails, Devise, RSpec, HTML, CSS, Git, Stripe and CharityNavigator API',
      link: 'https://charity-frog.herokuapp.com/'
    },
    {
      image: Mastermind,
      name: 'Mastermind',
      description: 'I worked in a small group to create a version of the game Mastermind. Once the group project was complete, I completely refactored the code to separate concerns, use Webpack, make it modular, add testing and redesign the UI.',
      technologies: 'Javascript, Webpack, Jasmine, Karma, jQuery, HTML and CSS',
      link: 'https://github.com/klowe27/mastermind'
    }
  ];

  return(
    <div className="space-above">
      <h2>My Work</h2>
      <div className="content-container">
        {projects.map((project, index) =>
          <Project
            image={project.image}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
            key={index}/>
        )}
      </div>
    </div>
  );
}

export default Interests;
