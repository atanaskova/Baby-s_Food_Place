import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import '../../styles/MyProfileForm.css';

const MyProfileForm = () => {
    return (
      <div className="my-profile">
        <Form className="form-boxes">
  
          <FormGroup className="left-box">
  
            <FormGroup controlId="name">
              <FormLabel className='text-style'>First Name</FormLabel>
              <FormControl
              className="bgd-style"
              type="text"
              name="name" 
              label="name"
            />
            </FormGroup>
  
            <FormGroup controlId="email">
              <FormLabel className='text-style'>E-mail</FormLabel>
              <FormControl 
              type='email' 
              name='email' 
              className="bgd-style"
              label="Email"
            />
            </FormGroup>
  
            <FormGroup controlId="password">
              <FormLabel className='text-style'>Password</FormLabel>
              <FormControl 
              type='password' 
              name='password' 
              className="bgd-style"
              label="Password"
            />
            </FormGroup>
  
            <button className='update' type='submit'>SAVE</button>
  
          </FormGroup>
  
          <FormGroup className="right-box">
  
            <FormGroup controlId="surname">
              <FormLabel className='text-style'>Last Name</FormLabel>
              <FormControl 
              type='text' 
              name='surname' 
              className="bgd-style"
              label="surname"
            />
            </FormGroup>
  
            <FormGroup controlId="birthday">
              <FormLabel className='text-style'>Birthday</FormLabel>
              <FormControl 
              type='date' 
              name='birthday' 
              className="bgd-style"
              label="Birthday"
            />
            </FormGroup>
  
            <FormGroup controlId="confirmPassword">
              <FormLabel className='text-style'>Repeat Password</FormLabel>
              <FormControl 
              type='password' 
              name='confirmation_password' 
              className="bgd-style"
              label="confirmPassword"
            />
            </FormGroup>
  
          </FormGroup>
        </Form>
      </div>
    );
  };
  export default MyProfileForm;