import React, {useState}  from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import Header from '../MainPage/Header';
import Footer from '../MainPage/Footer';
import { Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import {toast} from 'react-toastify';
import '../../styles/ResetPassForm.css';
import 'react-toastify/dist/ReactToastify.css';
import {resetPassword} from '../../actions/auth';

toast.configure();

const ResetPassForm=()=>{
    const [update, setUpdate] = useState({email: '', new_password: ''});
    const dispatch=useDispatch();
    const history=useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(resetPassword(update));
        toast.success('Password is successfully changed! Please log in again!',{position:toast.POSITION.TOP_CENTER});
        history.push('/login');
      }
    
      const handleChange=(e)=>{
        setUpdate({...update, [e.target.name] : e.target.value});
      };    
  
    return (
        <div>
        <Header />
    
        <div className="container-fluid" style={{width:780}}> 
            <div className="separator7">
                <h2>Reset password</h2>
                <div className="line7"></div>
            </div>
    
            <div className="reset-form">
                <Form>
                    <FormGroup controlId="email">
                        <FormLabel className='reset-style'>E-mail</FormLabel>
                        <FormControl 
                            type='email' 
                            placeholder='user@domain.com' 
                            name='email' 
                            className="reset-input-style" 
                            label="Email"
                            onChange={handleChange}/>
                    </FormGroup>

                    <FormGroup controlId="new_password">
                        <FormLabel className='reset-style' id="text-style-2">Password</FormLabel>
                        <FormControl 
                            type='password' 
                            placeholder='******' 
                            name='new_password' 
                            className="reset-input-style"
                            label="Password"
                            onChange={handleChange}/>
                        </FormGroup>
                <button type="submit" className="resetBtn" onClick={handleSubmit}>Reset Password</button>
                </Form>
            </div>
        </div>
    
        <Footer />
        </div>
      );
}

export default ResetPassForm;