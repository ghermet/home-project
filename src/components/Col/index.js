import React from 'react';
import PropTypes from 'prop-types';

const Col = ({ style, children, flexGrow, ...rest }) => (
  <div
    {...rest}
    style={{ ...style, flexGrow, display: 'flex', flexDirection: 'column', padding: 5 }}
  >
    {children}
  </div>
);

Col.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  style: PropTypes.object,
  flexGrow: PropTypes.number,
};

Col.defaultProps = {
  style: {},
  flexGrow: 1,
};

export default Col;
