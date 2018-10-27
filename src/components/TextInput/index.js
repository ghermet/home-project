import React from 'react';
import PropTypes from 'prop-types';
import { withFormsy } from 'formsy-react';
import cx from 'classnames';

import Row from '../Row';

import './TextInput.scss';

class TextInput extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    onChange: () => {},
    placeholder: null,
    label: null,
  };

  onChange = event => {
    const { value } = event.target;
    this.props.setValue(value);
    this.props.onChange(value);
  };

  getValue = () => this.props.getValue() || '';

  render() {
    const {
      name,
      label,
      placeholder,
      onChange,
      getErrorMessage,
      getErrorMessages,
      getValue,
      setValue,
      resetValue,
      hasValue,
      isFormDisabled,
      isFormSubmitted,
      isValid,
      isValidValue,
      isPristine,
      isRequired,
      setValidations,
      showRequired,
      showError,
      validationError,
      validationErrors,
      ...rest
    } = this.props;
    const errorMessage = getErrorMessage();

    return (
      <div className={cx({ input: true })}>
        {label && <label className="input__label">{label}</label>}
        <Row>
          <input
            {...rest}
            className={cx({ input__text: true, error: errorMessage })}
            name={name}
            placeholder={placeholder}
            onChange={this.onChange}
            value={this.getValue()}
          />
        </Row>
        {errorMessage && <span className="input__error-message">{errorMessage}</span>}
      </div>
    );
  }
}

export default withFormsy(TextInput);
