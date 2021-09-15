import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { Form, FormGroup, FormControl, FormLabel,InputGroup } from 'react-bootstrap';
import {register} from '../../actions/auth';
import '../../styles/CreateAccForm.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const CreateAccForm = () => {
  const [userData, setUserData] = useState({name:'', surname:'', email:'', birthday:'', password:'', confirmation_password:'',imageUrl:''});
  const [showPass,setShowPass]=useState(false);
  const dispatch=useDispatch();
  const history=useHistory();
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(register(userData,history));
    toast.success('You have been successfully registered!',{position:toast.POSITION.TOP_CENTER});
  };

  const handleChange=(e)=>{
    setUserData({...userData, [e.target.name] : e.target.value});
  };

  const toggleShowPass=()=>{
    setShowPass({showPass:!showPass});
  }

  return (
    <div className="create-account">
      <Form className="form-boxes" onSubmit={handleSubmit}>

        <FormGroup className="left-box">

          <FormGroup controlId="name">
            <FormLabel className='text-style'>First Name</FormLabel>
            <FormControl
            className="bgd-style-register"
            type="text"
            placeholder='John' 
            name="name" 
            label="name"
            required
            onChange={handleChange}/>
          </FormGroup>

          <FormGroup controlId="email">
            <FormLabel className='text-style'>E-mail</FormLabel>
            <FormControl 
            type='email' 
            placeholder='john@smith.com' 
            name='email' 
            className="bgd-style-register"
            label="Email"
            required
            onChange={handleChange}/>
          </FormGroup>

          <FormLabel className='text-style'>Password</FormLabel>
          <InputGroup controlId="password">
            <InputGroup.Text className="input-txt" onClick={toggleShowPass}>{showPass? <i className="bi bi-eye-fill password-icon"/> : <i className="bi bi-eye-slash-fill password-icon"/>}</InputGroup.Text>
            <FormControl 
            type={showPass?'text':'password'}
            placeholder='******' 
            name='password' 
            className="bgd-style-register"
            label="Password"
            required
            onChange={handleChange}/>
          </InputGroup>

          <button className='register' type='submit'>CREATE ACCOUNT</button>

        </FormGroup>

        <FormGroup className="right-box">

          <FormGroup controlId="surname">
            <FormLabel className='text-style'>Last Name</FormLabel>
            <FormControl 
            type='text' 
            placeholder='Smith' 
            name='surname' 
            className="bgd-style-register"
            label="surname"
            required
            onChange={handleChange}/>
          </FormGroup>

          <FormGroup controlId="birthday">
            <FormLabel className='text-style'>Birthday</FormLabel>
            <FormControl 
            type='date' 
            name='birthday' 
            className="bgd-style-register"
            label="Birthday"
            required
            onChange={handleChange}/>
          </FormGroup>

          <FormGroup controlId="confirmPassword">
            <FormLabel className='text-style'>Repeat Password</FormLabel>
            <FormControl 
            type='password' 
            placeholder='******' 
            name='confirmation_password' 
            className="bgd-style-register"
            label="confirmPassword"
            required
            onChange={handleChange}/>
          </FormGroup>

        </FormGroup>
      </Form>
    </div>
  );
};
export default CreateAccForm;