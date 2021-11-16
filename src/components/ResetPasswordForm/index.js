import React from 'react';
import { sendResetPassword } from '../../firebase/utils';
import useNagivation from '../../shared/hooks/useNavigation';
import { routeKeys } from '../../shared/utilts/constants';
import Button from '../Forms/Button';
import FormInput from '../Forms/Input';
import FormWrapper from '../FormWrapper';

import './styles.scss';

function ResetPasswordForm() {
  const [email, setEmail] = React.useState(``);
  const [errors, setErrors] = React.useState([]);
  const { push } = useNagivation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendResetPassword(email)
        .then(() => {
          push(routeKeys.LOGIN);
        })
        .catch(() => {
          setErrors(['Email not found. PLease try again']);
        });
    } catch (err) {}
  };

  return (
    <FormWrapper headline='Reset password'>
      {errors.length > 0 ? (
        <ul>
          {errors.map((e, index) => {
            <li key={index}>{e}</li>;
          })}
        </ul>
      ) : null}
      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          placeholder='Email'
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Button type='submit'>Reset password</Button>
      </form>
    </FormWrapper>
  );
}

export default ResetPasswordForm;
