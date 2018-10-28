import React from 'react';

import Row from '../../components/Row';
import Col from '../../components/Col';
import HomeLogo from '../../components/HomeLogo';
import ProgressBar from '../../components/ProgressBar';

import steps from './steps';

import './Onboarding.scss';

export default class Onboarding extends React.Component {
  state = {
    formIndex: 0,
    form: {},
    steps: steps,
  };

  getNextIncompleteStepIndex = (steps, currentIndex) => {
    const nextIndex = steps.findIndex(o => o.get('completed') === false);
    return nextIndex > -1 ? nextIndex : currentIndex;
  };

  onNext = nextForm => {
    this.setState(({ formIndex, steps, form }) => {
      const newForm = { ...form, ...nextForm };
      const stepsWithNextForm = steps.setIn([formIndex, 'form'], nextForm);
      const newSteps = stepsWithNextForm.setIn([formIndex, 'completed'], true);
      const nextIndex = this.getNextIncompleteStepIndex(newSteps, formIndex);
      return {
        form: newForm,
        steps: newSteps,
        formIndex: nextIndex,
      };
    });
  };

  goBackToInputForm = input => {
    this.setState(({ steps, formIndex }) => {
      const index = steps.findIndex(o => o.get('form').hasOwnProperty(input));
      return { formIndex: index > -1 ? index : formIndex };
    });
  };

  getProgressPercentage = steps => (steps.filter(o => o.get('completed')).size / steps.size) * 100;

  render() {
    const { form, formIndex, steps } = this.state;
    const Form = steps.getIn([formIndex, 'component']);
    return (
      <Col className="onboarding">
        <Row>
          <Col className="onboarding__progress-bar-container">
            <ProgressBar percentage={this.getProgressPercentage(steps)} />
          </Col>
        </Row>
        <Row>
          <Col>
            <header className="onboarding__header">
              <h1>Welcome to Home</h1>
              <HomeLogo />
            </header>
            <section className="onboarding__body">
              <Form data={form} goBackToInputForm={this.goBackToInputForm} onSubmit={this.onNext} />
            </section>
          </Col>
        </Row>
      </Col>
    );
  }
}
