import React from 'react';
import PropTypes from 'prop-types';
import './assets/styles/Star.css';

function Star({color, left, top, duration}) {
  return(
    <div className='star'>
      <style jsx>{`
        div {
          background-color: ${color};
          left: ${left}px;
          top: ${top}px;
          animation-duration: ${duration}s;
        }
      `}</style>
    </div>
  );
}

Star.propTypes = {
  color: PropTypes.string,
  left: PropTypes.number,
  top: PropTypes.number,
  duration: PropTypes.number
};

export default Star;