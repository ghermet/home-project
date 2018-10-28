import React from 'react';

import Form from '../components/Form';
import Row from '../components/Row';
import Col from '../components/Col';

import { SalaryRange } from '../inputs';

const SalaryForm = ({ data, goBackToInputForm, ...rest }) => (
  <Row>
    <Col style={{ alignItems: 'center' }}>
      <Row>
        <h2>What is your salary range?</h2>
      </Row>
      <Form {...rest} submitLabel="Next">
        <Row>
          <Col flexGrow={1}>
            <SalaryRange value={data.salary || ''} />
          </Col>
        </Row>
      </Form>
    </Col>
  </Row>
);

export default SalaryForm;
