export const Content = {
  email: 'kristin.lowe1@gmail.com',
  phone: '360-910-2110',
  linkedin: 'https://www.linkedin.com/in/kristin-brewer-lowe/',
  github: 'https://github.com/klowe27',
  bio: 'I\'m a driven and curious marketer turned web developer with a passion for quality, scalable code that solves interesting problems. After earning an MA in English lit, I spent 6 years applying my writing and design skills to marketing. After years of toying with the idea of coding, I decided to quit my job as a product marketing manager and see if programming was right for me. Coding has clicked for me. Now, I\'m leveraging my critical thinking and problem solving skills to build cool things. On weekends, you can find me sipping cider in the backyard, painting, reading The Minimalists blog, or YouTubing things like \'How to install a tile floor.\' And, you know, doing all those life things like vacuuming the rugs, reconciling the budget, and filling the yard debris bin.',
  background: 'My dad worked for HP for his entire career as a software engineer helping design printers. When I was younger, he used to say I had a great engineering mind based on how I approached projects and found creative solutions. My freshman year of college, I was torn between engineering and English, and ended up pursuing English, which led to a career in marketing. But marketing has never felt like a natural fit for my skills, and I\'ve always wondered if programming could be right for me. I spent enough years wondering, and now I\'m doing something about it.'
};

export const ProjectList = [
  {
    image: 'food',
    name: 'Food Savor',
    description: 'With a small group, I created a web app to let users search for recipes based on expiring ingredients in order to reduce food waste. I designed the UI, parsed and displayed the API response, and was heavily involved in the site architecture.',
    technologies: ['Pod Save America', 'Serial', 'The Daily', 'Reply All'],
    link: 'https://foodsavorapp-b49fd.firebaseapp.com/'
  },
  {
    image: 'stonewall',
    name: 'Stonewall Wears',
    description: 'This is an e-commerce site where users can browse products and add them to their cart. Users can log-in with their Google account to save their cart for later.',
    technologies: 'Angular, Firebase, Firebase Authentication, Typescript and Git',
    link: 'https://stonewall-wears.firebaseapp.com/'
  },
  {
    image: 'charity-frog',
    name: 'Charity Frog',
    description: 'With a small group, I created a Ruby/Rails app where users can select from a list of charities to donate to. I designed the UI and heavily contributed to the architecture of the site, strategically planning data tables and routing.',
    technologies: 'Ruby, Rails, Devise, RSpec, HTML, CSS, Git, Stripe and CharityNavigator API',
    link: 'https://charity-frog.herokuapp.com/'
  },
  {
    image: 'mastermind',
    name: 'Mastermind',
    description: 'I worked in a small group to create a version of the game Mastermind. Once the group project was complete, I completely refactored the code to separate concerns, use Webpack, make it modular, add testing and redesign the UI.',
    technologies: 'Javascript, Webpack, Jasmine, Karma, jQuery, HTML and CSS',
    link: 'https://github.com/klowe27/mastermind'
  }
];

export const InterestList = [
  {
    label: 'Podcasts',
    icon: 'mic',
    list: ['Pod Save America', 'Serial', 'The Daily', 'Reply All']
  },
  {
    label: 'Topics',
    icon: 'favorite',
    list: ['Minimalis', 'Design', 'Financial Independence', 'Photography']
  },
  {
    label: 'Dream Travel',
    icon: 'flight_takeoff',
    list: ['Thailand', 'Ireland', 'Grand Canyon', 'Iceland']
  }
];