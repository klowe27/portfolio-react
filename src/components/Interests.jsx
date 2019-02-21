import React from 'react';
import IndividualInterest from './IndividualInterest';
import { InterestList } from './assets/content.js';
import { v4 } from 'uuid';

function Interests() {

  return(
    <div className='space-above' id='interests'>
      <h2>Interests</h2>
      <div className='content-container'>
        {InterestList.map((interest) =>
          <IndividualInterest
            label={interest.label}
            icon={interest.icon}
            list={interest.list}
            key={v4()}/>
        )}
      </div>
    </div>
  );
}

export default Interests;
