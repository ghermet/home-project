import React from 'react';
import PropTypes from 'prop-types';

import './ProgressBar.scss';

const ProgressBar = ({ percentage }) => (
  <div className="progress-bar__container">
    <div
      className="progress-bar__progress"
      style={{
        width: `${percentage}%`,
      }}
    />
  </div>
);

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default ProgressBar;
