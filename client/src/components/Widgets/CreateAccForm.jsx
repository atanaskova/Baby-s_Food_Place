import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import {register} from '../../actions/auth';
import '../../styles/CreateAccForm.css';

const CreateAccForm = () => {
  const [user, setUser] = useState({first_name:'', last_name:'', email:'', birthday:'', password:'', repeat_password:'',picture:''});
  const dispatch=useDispatch();
  const history=useHistory();
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(register(user,history));
  }

  return (
    <div className="create-account">
      <Form className="form-boxes" onSubmit={handleSubmit}>

        <FormGroup className="left-box">

          <FormGroup controlId="firstName">
            <FormLabel className='text-style'>First Name</FormLabel>
            <FormControl
            className="bgd-style"
            type="text"
            placeholder='John' 
            name="firstName" 
            label="FirstName"
            value={user.first_name}
            onChange={(e)=>setUser({...user, first_name:e.target.value})}/>
          </FormGroup>

          <FormGroup controlId="email">
            <FormLabel className='text-style'>E-mail</FormLabel>
            <FormControl 
            type='email' 
            placeholder='john@smith.com' 
            name='email' 
            className="bgd-style"
            label="Email"
            value={user.email}
            onChange={(e)=>setUser({...user, email:e.target.value})}/>
          </FormGroup>

          <FormGroup controlId="password">
            <FormLabel className='text-style'>Password</FormLabel>
            <FormControl 
            type='password' 
            placeholder='******' 
            name='password' 
            className="bgd-style"
            label="Password"
            value={user.password}
            onChange={(e)=>setUser({...user, password:e.target.value})}/>
          </FormGroup>

          <button className='register' type='submit'>CREATE ACCOUNT</button>

        </FormGroup>

        <FormGroup className="right-box">

          <FormGroup controlId="lastName">
            <FormLabel className='text-style'>Last Name</FormLabel>
            <FormControl 
            type='text' 
            placeholder='Smith' 
            name='lastName' 
            className="bgd-style"
            label="LastName"
            value={user.last_name}
            onChange={(e)=>setUser({...user, last_name:e.target.value})}/>
          </FormGroup>

          <FormGroup controlId="birthday">
            <FormLabel className='text-style'>Birthday</FormLabel>
            <FormControl 
            type='date' 
            name='birthday' 
            className="bgd-style"
            label="Birthday"
            value={user.birthday}
            onChange={(e)=>setUser({...user, birthday:e.target.value})}/>
          </FormGroup>

          <FormGroup controlId="repeatPassword">
            <FormLabel className='text-style'>Repeat Password</FormLabel>
            <FormControl 
            type='password' 
            placeholder='******' 
            name='repeatPassword' 
            className="bgd-style"
            label="RepeatPassword"
            value={user.repeat_password}
            onChange={(e)=>setUser({...user, repeat_password:e.target.value})}/>
          </FormGroup>

        </FormGroup>
      </Form>
    </div>
  );
};
export default CreateAccForm;