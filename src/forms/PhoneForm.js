import React from 'react';

import Form from '../components/Form';
import Row from '../components/Row';
import Col from '../components/Col';

import { PhoneNumber } from '../inputs';

const PhoneForm = ({ data, goBackToInputForm, ...rest }) => (
  <Row>
    <Col style={{ alignItems: 'center' }}>
      <Row>
        <h2>What is your phone number?</h2>
      </Row>
      <Form {...rest} submitLabel="Next">
        <Row>
          <Col>
            <PhoneNumber autoFocus value={data.phonenumber || ''} />
          </Col>
        </Row>
      </Form>
    </Col>
  </Row>
);

export default PhoneForm;
