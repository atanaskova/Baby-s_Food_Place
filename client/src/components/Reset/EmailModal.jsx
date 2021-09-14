import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {Button, Modal, FormGroup, FormControl} from 'react-bootstrap';
import {confirmEmail} from '../../actions/auth';
import {toast} from 'react-toastify';
import '../../styles/EmailModal.css';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const EmailModal=(props)=> {
  const [email,setEmail]=useState('')
  const dispatch=useDispatch();
  const handleSubmit=()=>{
    props.onHide
    dispatch(confirmEmail(email));
    toast.warn('Please check your email!',{position:toast.POSITION.TOP_CENTER});
  }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="email-modal">
          <Modal.Title id="contained-modal-title-vcenter">
            Reset Password
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="email-modal">
          <h5>Please enter your email</h5>
          <FormGroup controlId="email">
              <FormControl 
              type='email'
              placeholder='user@domain.com' 
              name='email' 
              className="placeholder-style" 
              label="Email"
              onChange={(e)=>setEmail({email:e.target.value})}/>
            </FormGroup>
        </Modal.Body>
        
        <Modal.Footer className="email-modal">
          <Button onClick={handleSubmit} className="email-submit">Submit</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default EmailModal;