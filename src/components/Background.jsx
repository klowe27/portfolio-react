import React from 'react';
import Experience from './Experience';
import { Content } from './assets/content.js';

function Background() {
  return(
    <div>
      <div className='space-above center' id='background'>
        <h2>Background</h2>
      </div>
      <Experience/>
    </div>
  );
}

export default Background;
