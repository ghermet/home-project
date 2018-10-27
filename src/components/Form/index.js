import React from 'react';
import PropTypes from 'prop-types';
import Formsy from 'formsy-react';

import Button from '../Button';
import Row from '../Row';
import Col from '../Col';

import './Form.scss';

export default class Form extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    onSubmit: PropTypes.func.isRequired,
    submitLabel: PropTypes.string,
  };

  static defaultProps = {
    submitLabel: 'Submit ',
  };

  state = { canSubmit: false };

  disableButton = () => {
    this.setState({ canSubmit: false });
  };

  enableButton = () => {
    this.setState({ canSubmit: true });
  };

  render() {
    const { children, onSubmit, submitLabel, ...rest } = this.props;
    const { canSubmit } = this.state;
    return (
      <Formsy
        {...rest}
        className="form"
        onValid={this.enableButton}
        onInvalid={this.disableButton}
        onSubmit={onSubmit}
      >
        {children}
        <Row>
          <Col flexGrow={1} className="form__submit-button-wrapper">
            <Button type="submit" label={submitLabel} disabled={!canSubmit} />
          </Col>
        </Row>
      </Formsy>
    );
  }
}
