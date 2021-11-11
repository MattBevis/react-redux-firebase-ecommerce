import React from 'react';
import { signInWithGoogle, login } from '../../firebase/utils';
import Button from '../Forms/Button';
import FormInput from '../Forms/Input';
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
    <div className="loginForm">
      <div className="wrap">
        <h2>Login</h2>
        <div className="formWrap">
          <form onSubmit={handleSubmit}>
            <FormInput
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit">Login</Button>

            <div className="socialLogins">
              <div className="row">
                <Button onClick={signInWithGoogle}>Login with Google</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
