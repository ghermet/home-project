import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Row.scss';

const Row = ({ className, style, children, ...rest }) => (
  <div
    {...rest}
    className={cx(['row', className])}
    style={{ ...style, display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}
  >
    {children}
  </div>
);

Row.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

Row.defaultProps = {
  className: '',
  style: {},
};

export default Row;
