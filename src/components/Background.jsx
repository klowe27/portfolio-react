import React from 'react';
import Experience from './Experience'

function Background() {
  return(
    <div className="space-above center">
      <h2>Background</h2>
      <h3>Why programming?</h3>
      <p>My dad worked for HP for his entire career as a software engineer helping design printers. When I was younger, he used to say I had a great engineering mind based on how I approached projects and found creative solutions. My freshman year of college, I was torn between engineering and English, and ended up pursuing English, which led to a career in marketing. But marketing has never felt like a natural fit for my skills, and I've always wondered if programming could be right for me. I spent enough years wondering, and now I'm doing something about it.</p>
      <Experience/>
    </div>
  );
}

export default Background;
