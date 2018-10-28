import React from 'react';

import Row from '../components/Row';
import Col from '../components/Col';
import Form from '../components/Form';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

export default class RecapForm extends React.Component {
  onSubmit = form => {
    this.props.onSubmit(form);
    document.location.reload('/');
  };

  renderInputsData = data =>
    Object.entries(data).map(([key, value]) => (
      <Col key={key}>
        <Row style={{ marginBottom: 10 }}>
          <TextInput name={key} readOnly style={{ border: 'none' }} label={key} value={value} />
        </Row>
        <Row>
          <Button label="Edit" onClick={() => this.props.goBackToInputForm(key)} fullWidth />
        </Row>
      </Col>
    ));

  render() {
    const { data, onSubmit, goBackToInputForm, ...rest } = this.props;
    return (
      <Row>
        <Col style={{ alignItems: 'center' }}>
          <Row>
            <h2>Is all your data correct?</h2>
          </Row>
          <Form {...rest} onSubmit={this.onSubmit} submitLabel="Submit">
            <Row>
              <Col>{this.renderInputsData(data)}</Col>
            </Row>
          </Form>
        </Col>
      </Row>
    );
  }
}
