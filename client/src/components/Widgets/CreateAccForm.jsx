import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import {register} from '../../actions/auth';
import '../../styles/CreateAccForm.css';

const CreateAccForm = () => {
  const [userData, setUserData] = useState({name:'', surname:'', email:'', birthday:'', password:'', confirmation_password:'',imageUrl:''});
  const dispatch=useDispatch();
  const history=useHistory();
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(register(userData,history));
  };

  const handleChange=(e)=>{
    setUserData({...userData, [e.target.name] : e.target.value});
  };

  return (
    <div className="create-account">
      <Form className="form-boxes" onSubmit={handleSubmit}>

        <FormGroup className="left-box">

          <FormGroup controlId="name">
            <FormLabel className='text-style'>First Name</FormLabel>
            <FormControl
            className="bgd-style"
            type="text"
            placeholder='John' 
            name="name" 
            label="name"
            onChange={handleChange}/>
          </FormGroup>

          <FormGroup controlId="email">
            <FormLabel className='text-style'>E-mail</FormLabel>
            <FormControl 
            type='email' 
            placeholder='john@smith.com' 
            name='email' 
            className="bgd-style"
            label="Email"
            onChange={handleChange}/>
          </FormGroup>

          <FormGroup controlId="password">
            <FormLabel className='text-style'>Password</FormLabel>
            <FormControl 
            type='password' 
            placeholder='******' 
            name='password' 
            className="bgd-style"
            label="Password"
            onChange={handleChange}/>
          </FormGroup>

          <button className='register' type='submit'>CREATE ACCOUNT</button>

        </FormGroup>

        <FormGroup className="right-box">

          <FormGroup controlId="surname">
            <FormLabel className='text-style'>Last Name</FormLabel>
            <FormControl 
            type='text' 
            placeholder='Smith' 
            name='surname' 
            className="bgd-style"
            label="surname"
            onChange={handleChange}/>
          </FormGroup>

          <FormGroup controlId="birthday">
            <FormLabel className='text-style'>Birthday</FormLabel>
            <FormControl 
            type='date' 
            name='birthday' 
            className="bgd-style"
            label="Birthday"
            onChange={handleChange}/>
          </FormGroup>

          <FormGroup controlId="confirmPassword">
            <FormLabel className='text-style'>Repeat Password</FormLabel>
            <FormControl 
            type='password' 
            placeholder='******' 
            name='confirmation_password' 
            className="bgd-style"
            label="confirmPassword"
            onChange={handleChange}/>
          </FormGroup>

        </FormGroup>
      </Form>
    </div>
  );
};
export default CreateAccForm;