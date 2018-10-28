import React from 'react';

import RadioGroup from '../components/RadioGroup';

const salaryOptions = [
  { value: '0 - 1000', label: '0 - 1000' },
  { value: '1000 - 2000', label: '1000 - 2000' },
  { value: '2000 - 3000', label: '2000 - 3000' },
  { value: '3000 - 4000', label: '3000 - 4000' },
  { value: 'mehr als 4000', label: 'mehr als 4000' },
];

const SalaryRange = ({ value }) => (
  <RadioGroup
    autoFocus
    name="salary"
    validations="isExisty"
    checkedIndex={salaryOptions.findIndex(o => o.value === value)}
    data={salaryOptions}
  />
);

export default SalaryRange;
