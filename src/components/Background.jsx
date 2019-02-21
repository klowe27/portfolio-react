import React from 'react';
import Experience from './Experience';
import { Content } from './assets/content.js';

function Background() {
  return(
    <div>
      <div className='space-above center' id='background'>
        <h2>Background</h2>
        <h3>Why programming?</h3>
        <p>{Content.background}</p>
      </div>
      <Experience/>
    </div>
  );
}

export default Background;
