import React from 'react';

import Form from '../components/Form';
import Row from '../components/Row';
import Col from '../components/Col';

import { FirstName, LastName } from '../inputs';

const NameForm = ({ data, goBackToInputForm, ...rest }) => (
  <Row>
    <Col style={{ alignItems: 'center' }}>
      <h2>What is your name?</h2>
      <Form {...rest} submitLabel="Next">
        <Row>
          <Col>
            <FirstName autoFocus value={data.firstname || ''} />
          </Col>
          <Col>
            <LastName value={data.lastname || ''} />
          </Col>
        </Row>
      </Form>
    </Col>
  </Row>
);

export default NameForm;
