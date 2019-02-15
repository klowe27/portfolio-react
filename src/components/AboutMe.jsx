import React from 'react';
import ProfileImage from './assets/images/profile.jpg'

function AboutMe(){
  return (
    <div className="space-above center">
      <img  className="img-circle headshot" src={ProfileImage} alt="Profile image"/>
      <h2>About Me</h2>
      <p>After earning an MA in English lit, I spent 6 years applying my writing and design skills to marketing. After years of toying with the idea of coding, I decided to quit my job as a product marketing manager and see if programming was right for me. Now, during the week you can find me learning to code at <a href="https://www.epicodus.com/" target="blank">Epicodus</a>. On weekends, you can find me sipping cider in the backyard, painting, reading The Minimalists blog, or YouTubing things like "How to install a tile floor." And, you know, doing all those life things like vacuuming the rugs, reconciling the budget, and filling the yard debris bin.</p>
    </div>
  );
}

export default AboutMe;
