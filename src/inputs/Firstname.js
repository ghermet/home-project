import React from 'react';
import TextInput from '../components/TextInput/index';

const FirstName = props => (
  <TextInput
    {...props}
    required
    validations="isAlpha"
    validationError="Invalid first name"
    name="firstname"
    placeholder="First Name"
  />
);

export default FirstName;
