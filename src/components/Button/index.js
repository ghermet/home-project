import React from 'react';
import { PropTypes } from 'prop-types';

import './Button.scss';

export default class Button extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    fullWidth: PropTypes.bool,
    style: PropTypes.object,
    type: PropTypes.string,
  };

  static defaultProps = {
    style: {},
    fullWidth: false,
    type: 'button',
  };

  render() {
    const { type, label, style, fullWidth, ...rest } = this.props;

    return (
      <button {...rest} type={type} style={{ ...style, width: fullWidth ? '100%' : 'auto' }}>
        {label}
      </button>
    );
  }
}
