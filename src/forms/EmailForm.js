import React from 'react';

import Form from '../components/Form';
import Row from '../components/Row';
import Col from '../components/Col';

import { Email } from '../inputs';

const EmailForm = ({ data, goBackToInputForm, ...rest }) => (
  <Row>
    <Col style={{ alignItems: 'center' }}>
      <h2>What is your email?</h2>
      <Form {...rest} submitLabel="Next">
        <Row>
          <Col>
            <Email autoFocus value={data.email} />
          </Col>
        </Row>
      </Form>
    </Col>
  </Row>
);

export default EmailForm;
