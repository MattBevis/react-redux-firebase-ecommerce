import React from 'react';
import { Link } from 'react-router-dom';
import { signInWithGoogle, login } from '../../firebase/utils';
import { routeKeys } from '../../shared/utilts/constants';
import Button from '../Forms/Button';
import FormInput from '../Forms/Input';
import FormWrapper from '../FormWrapper';
import './styles.scss';

function LoginForm({ ...props }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormWrapper headline='Login'>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          name='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type='submit'>Login</Button>

        <div className='socialLogins'>
          <div className='row'>
            <Button onClick={signInWithGoogle}>Login with Google</Button>
          </div>
        </div>
        <div className='links'>
          <Link to={routeKeys.RESET_PASSWORD}>Reset password</Link>
        </div>
      </form>
    </FormWrapper>
  );
}

export default LoginForm;
