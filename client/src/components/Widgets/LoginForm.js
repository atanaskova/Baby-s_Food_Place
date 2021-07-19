import React from 'react';
import { Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap'
import '../../styles/Login.css';

const LoginForm = () => {
  return (
    <div className="login-form">
      <Form>
        <FormGroup controlId="email">
          <FormLabel className='text-style'>E-mail</FormLabel>
          <FormControl type='email' placeholder='user@domain.com' name='email' className="placeholder-style" />
        </FormGroup>

        <FormGroup controlId="password">
          <FormLabel className='text-style' id="text-style-2">Password</FormLabel>
          <FormControl type='password' placeholder='******' name='password' className="placeholder-style" />
        </FormGroup>
        <button type="submit" className="formLoginButton">LOG IN</button>
      </Form>
    </div>
  );
};

export default LoginForm;