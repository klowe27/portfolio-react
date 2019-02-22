import React from 'react';
import Interest from './Interest';
import { InterestListContent } from './assets/content.js';
import { v4 } from 'uuid';

function InterestList() {

  return(
    <div className='space-above' id='interests'>
      <h2>Interests</h2>
      <div className='content-container'>
        {InterestListContent.map((interest) =>
          <Interest
            label={interest.label}
            icon={interest.icon}
            list={interest.list}
            key={v4()}/>
        )}
      </div>
    </div>
  );
}

export default InterestList;
