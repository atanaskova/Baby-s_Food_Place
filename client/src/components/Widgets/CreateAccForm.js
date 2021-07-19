import React from 'react';
import '../../styles/CreateAccForm.css';
import { Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';

const CreateAccForm = () => {
  return (
    <div className="create-account">
      <Form className="form-boxes">

        <FormGroup className="left-box">

          <FormGroup controlId="firstName">
            <FormLabel className='text-style'>First Name</FormLabel>
            <FormControl type='text' placeholder='John' name='firstName' className="bgd-style"/>
          </FormGroup>

          <FormGroup controlId="email">
            <FormLabel className='text-style'>E-mail</FormLabel>
            <FormControl type='email' placeholder='john@smith.com' name='email' className="bgd-style" />
          </FormGroup>

          <FormGroup controlId="password">
            <FormLabel className='text-style'>Password</FormLabel>
            <FormControl type='password' placeholder='******' name='password' className="bgd-style"/>
          </FormGroup>

          <button className='register' type='button'>CREATE ACCOUNT</button>

        </FormGroup>

        <FormGroup className="right-box">

          <FormGroup controlId="lastName">
            <FormLabel className='text-style'>Last Name</FormLabel>
            <FormControl type='text' placeholder='Smith' name='lastName' className="bgd-style"/>
          </FormGroup>

          <FormGroup controlId="birthday">
            <FormLabel className='text-style'>Birthday</FormLabel>
            <FormControl type='date' name='birthday' className="bgd-style"/>
          </FormGroup>

          <FormGroup controlId="repeatPassword">
            <FormLabel className='text-style'>Repeat Password</FormLabel>
            <FormControl type='password' placeholder='******' name='repeatPassword' className="bgd-style"/>
          </FormGroup>

        </FormGroup>
      </Form>
    </div>
  );
};
export default CreateAccForm;