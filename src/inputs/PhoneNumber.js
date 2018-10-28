import React from 'react';
import TextInput from '../components/TextInput/index';

const PhoneNumber = props => (
  <TextInput
    {...props}
    required
    validations="isNumeric"
    validationError="Invalid phone number"
    name="phonenumber"
    placeholder="Phone Number"
  />
);

export default PhoneNumber;
