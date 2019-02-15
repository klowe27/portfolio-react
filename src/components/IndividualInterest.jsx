import React from 'react';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css';
import { Icon } from 'react-materialize';

function IndividualInterest({label, icon, list}){
  return(
    <div className="content content-body">
      <Icon>{icon}</Icon>
      <h3>{label}</h3>
      <ul>
        {list.map((item) =>
          <li>{item}</li>
        )}
      </ul>
    </div>
  );
}

IndividualInterest.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
};

export default IndividualInterest;
