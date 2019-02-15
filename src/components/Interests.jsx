import React from 'react';
import IndividualInterest from './IndividualInterest'

function Interests() {
  const interests = [
    {
      label: "Podcasts",
      icon: 'mic',
      list: ["Pod Save America", "Serial", "The Daily", "Reply All"]
    },
    {
      label: "Topics",
      icon: 'favorite',
      list: ["Minimalis", "Design", "Financial Independence", "Photography"]
    },
    {
      label: "Dream Travel",
      icon: 'flight_takeoff',
      list: ["Thailand", "Ireland", "Grand Canyon", "Iceland"]
    }
  ];

  return(
    <div className="space-above" id="interests">
      <h2>Interests</h2>
      <div className="content-container">
        {interests.map((interest, index) =>
          <IndividualInterest
          label={interest.label}
          icon={interest.icon}
          list={interest.list}
          key={index}/>
        )}
      </div>
    </div>
  );
}

export default Interests;