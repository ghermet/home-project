import { fromJS } from 'immutable';

import * as forms from '../../forms';

export default fromJS([
  { id: 'name', component: forms.NameForm, completed: false },
  { id: 'email', component: forms.EmailForm, completed: false },
  { id: 'phone', component: forms.PhoneForm, completed: false },
  { id: 'salary', component: forms.SalaryForm, completed: false },
  { id: 'recap', component: forms.RecapForm, completed: false },
]);
