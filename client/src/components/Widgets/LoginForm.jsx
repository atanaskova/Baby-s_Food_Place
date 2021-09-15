import React, {useState} from 'react';
import EmailModal from '../Reset/EmailModal';
import {useDispatch} from 'react-redux';
import {GoogleLogin} from 'react-google-login';
import {useHistory} from 'react-router-dom';
import { Form, FormGroup, FormControl, FormLabel,InputGroup } from 'react-bootstrap'
import {login} from '../../actions/auth';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/Login.css';

toast.configure()

const LoginForm = () => {
  const [modalShow, setModalShow] = useState(false);
  const [showPass,setShowPass]=useState(false);
  const [user, setUser] = useState({email: '', password: '',});
  const dispatch=useDispatch();
  const history=useHistory();

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(login(user,history));
    toast.success('You have been successfully logged in!',{position:toast.POSITION.TOP_CENTER});
  }

  const handleChange=(e)=>{
    setUser({...user, [e.target.name] : e.target.value});
  };

  const toggleShowPass=()=>{
    setShowPass({showPass:!showPass});
  }

  const googleSuccess=async(res)=>{
    const result=res.profileObj;
    const token=res.tokenId;

    try {
      dispatch({type:'AUTH', data:{result,token}})
      history.push('/');
      toast.success('You have been successfully logged in!',{position:toast.POSITION.TOP_CENTER});
    } catch (error) {
      toast.error('Oops! Something went wrong. Please try again.',{position:toast.POSITION.TOP_CENTER});
      console.log(error)
    }
  }

  const googleFailure=(error)=>{
    toast.error('Google sign in was unsuccessful. Try again later!',{position:toast.POSITION.TOP_CENTER});
    console.log(error);
  }

  return (
    <div className="login-form">
      <Form>
        <FormGroup controlId="email">
          <FormLabel className='text-style'>E-mail</FormLabel>
          <FormControl 
          type='email' 
          placeholder='user@domain.com' 
          name='email' 
          className="placeholder-style" 
          label="Email"
          onChange={handleChange}/>
          </FormGroup>

          <FormLabel className='text-style' id="text-style-2">Password</FormLabel>
          <InputGroup controlid="password">
            <InputGroup.Text className="input-txt-2" onClick={toggleShowPass}>{showPass? <i className="bi bi-eye-fill password-icon-2"/> : <i className="bi bi-eye-slash-fill password-icon-2"/>}</InputGroup.Text>
            <FormControl 
            type={showPass?'text':'password'}
            placeholder='******' 
            name='password' 
            className="placeholder-style"
            label="Password"
            onChange={handleChange}/>
            </InputGroup>
          <button type="submit" className="formLoginButton" onClick={handleSubmit}>LOG IN</button>
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
          <div className="forgot-password" onClick={() => setModalShow(true)}>Forgot your password?</div>
          <EmailModal show={modalShow} onHide={() => setModalShow(false)}/>
      </Form>
    </div>
  );
};

export default LoginForm;