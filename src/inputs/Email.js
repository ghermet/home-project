import React from 'react';
import TextInput from '../components/TextInput';

const Email = props => (
  <TextInput
    {...props}
    required
    validations="isEmail"
    validationError="Invalid email"
    name="email"
    placeholder="Email"
  />
);

export default Email;
