import React from 'react';
import TextInput from '../components/TextInput/index';

const LastName = props => (
  <TextInput
    {...props}
    required
    validations="isAlpha"
    validationError="Invalid last name"
    name="lastname"
    placeholder="Last Name"
  />
);

export default LastName;
