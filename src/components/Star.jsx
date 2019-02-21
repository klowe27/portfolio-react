import React from 'react';
import PropTypes from 'prop-types';

function Star({color, left, top}) {
  return(
    <div className='star'>
      <style jsx>{`
        div {
          background-color: ${color};
          left: ${left}px;
          top: ${top}px;
        }
      `}</style>
    </div>
  );
}

Star.propTypes = {
  color: PropTypes.string,
  left: PropTypes.number,
  top: PropTypes.number
};

export default Star;