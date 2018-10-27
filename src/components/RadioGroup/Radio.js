import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Row from '../Row';

import './RadioGroup.scss';

const cxCheckmark = checked =>
  cx({
    radio__checkmark: true,
    'radio__checkmark--checked': checked,
  });

const cxCheckmarkDot = checked =>
  cx({
    'radio__checkmark-dot': true,
    'radio__checkmark-dot--checked': checked,
  });

const Radio = ({ label, value, checked, onClick, ...rest }) => (
  <Row className="radio">
    <span className={cxCheckmark(checked)}>
      <span className={cxCheckmarkDot(checked)} />
      <input {...rest} type="radio" label={label} value={value} onClick={onClick} />
    </span>
    <span className="radio__label">{label}</span>
  </Row>
);

Radio.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

Radio.defaultProps = {
  onClick: () => {},
};

export default Radio;
