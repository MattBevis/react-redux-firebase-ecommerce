import React from 'react';
import { auth, registerUser } from '../../firebase/utils';
import Button from '../Forms/Button';
import FormInput from '../Forms/Input';

import './styles.scss';

function RegisterForm() {
  const [displayName, setDisplayName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [errors, setErrors] = React.useState([]);

  const resetForm = () => {
    setDisplayName('');
    setEmail('');
    setPassword('');
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrors(["Passwords don't match"]);
      return;
    }

    try {
      await registerUser({
        displayName,
        email,
        password,
      });
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register">
      <div className="wrap">
        <h2>Register</h2>
        {displayName}
        {errors.length > 0 && (
          <ul>
            {errors.map((err, index) => (
              <li key={index}>{err}</li>
            ))}
          </ul>
        )}
        <div className="formWrap">
          <form onSubmit={handleFormSubmit}>
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              placeholder="Full name"
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button type="submit">Register</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
