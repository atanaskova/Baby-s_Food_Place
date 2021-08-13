import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {GoogleLogin} from 'react-google-login';
import {useHistory} from 'react-router-dom';
import { Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap'
import {login} from '../../actions/auth';
import '../../styles/Login.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({email: '', password: '',});
  const dispatch=useDispatch();
  const history=useHistory();

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(login(formData,history));
  }

  const googleSuccess=async(res)=>{
    const result=res.profileObj;
    const token=res.tokenId;

    try {
      dispatch({type:'AUTH', data:{result,token}})
      history.push('/');
    } catch (error) {
      console.log(error)
    }
  }

  const googleFailure=(error)=>{
    console.log("Google sign in was unsuccessful. Try again later!",error);
  }

  return (
    <div className="login-form">
      <Form onSubmit={handleSubmit}>
        <FormGroup controlId="email">
          <FormLabel className='text-style'>E-mail</FormLabel>
          <FormControl 
          type='email' 
          placeholder='user@domain.com' 
          name='email' 
          className="placeholder-style" 
          label="Email"
          value={formData.email}
          onChange={(e)=>setFormData({...formData, email:e.target.value})}/>
        </FormGroup>

        <FormGroup controlId="password">
          <FormLabel className='text-style' id="text-style-2">Password</FormLabel>
          <FormControl 
          type='password' 
          placeholder='******' 
          name='password' 
          className="placeholder-style"
          label="Password"
          value={formData.password}
          onChange={(e)=>setFormData({...formData, password:e.target.value})}/>
        </FormGroup>
        <button type="submit" className="formLoginButton">LOG IN</button>
        <GoogleLogin
          clientId="538887536596-2johobc7j611db0n8rnpei2l1n26p62n.apps.googleusercontent.com"
          render={(renderProps)=>(
            <button 
            className="btn btn-primary google"
            onClick={renderProps.onClick}>
              <i className="bi bi-google" style={{color:"white"}}/>
              GOOGLE SIGN IN
            </button>
          )}
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy="single_host_origin"
          />
      </Form>
    </div>
  );
};

export default LoginForm;