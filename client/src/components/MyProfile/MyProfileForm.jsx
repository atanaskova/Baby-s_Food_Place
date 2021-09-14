import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import '../../styles/MyProfileForm.css';
import {updateUser} from '../../actions/auth';
import FileBase from 'react-file-base64';
import img from '../../images/avatar.png';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const MyProfileForm = () => {
  const user=JSON.parse(localStorage.getItem('profile'));
  const [updatedUserData, setUpdatedUserData] = useState({name:user.result.name, surname:user.result.surname, email:user.result.email, birthday:user.result.birthday, password:'', confirmation_password:'',imageUrl:user.result.imageUrl});
  const id=user.result._id;
  const dispatch=useDispatch();
  const history=useHistory();

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(updateUser(id,updatedUserData));
    dispatch({type:'LOGOUT' });
    history.push('/');
    toast.success('You have successfully updated your profile! Please log in again!',{position:toast.POSITION.TOP_CENTER});
    console.log(updatedUserData);
  }

  const handleChange=(e)=>{
    setUpdatedUserData({...updatedUserData, [e.target.name] : e.target.value});
  };

    return (
      <div className="my-profile">
        <Form className="form-boxes" onSubmit={handleSubmit}>

        <div id="first-box-1">
          <span className="img-upload">
            {user.result.imageUrl?(
              <div>
                <img id="user-img-2" alt="avatar" src={user.result.imageUrl}/><br/>
              </div>
            ):(
              <div>
                <img id="user-img" alt="avatar" src={img}/><br/>
              </div>
            )}
              <FileBase 
                type="file" 
                multiple={false}
                onDone={({base64})=>setUpdatedUserData({...updatedUserData, imageUrl:base64})}
              />
          </span>
        </div>
  
          <FormGroup className="left-box">
  
            <FormGroup controlId="name">
              <FormLabel className='text-style'>First Name</FormLabel>
              <FormControl
              className="bgd-style"
              type="text"
              name="name" 
              label="name"
              defaultValue={user.result.name}
              onChange={handleChange}
            />
            </FormGroup>
  
            <FormGroup controlId="email">
              <FormLabel className='text-style'>E-mail</FormLabel>
              <FormControl 
              type='email' 
              name='email' 
              className="bgd-style"
              label="Email"
              defaultValue={user.result.email}
              onChange={handleChange}
            />
            </FormGroup>
  
            <FormGroup controlId="password">
              <FormLabel className='text-style'>Password</FormLabel>
              <FormControl 
              type='password' 
              name='password' 
              className="bgd-style"
              label="Password"
              placeholder="Enter password to make changes"
              onChange={handleChange}
            />
            </FormGroup>
  
            <button className='update' type='submit'>SAVE </button>
  
          </FormGroup>
  
          <FormGroup className="right-box">
  
            <FormGroup controlId="surname">
              <FormLabel className='text-style'>Last Name</FormLabel>
              <FormControl 
              type='text' 
              name='surname' 
              className="bgd-style"
              label="surname"
              defaultValue={user.result.surname}
              onChange={handleChange}
            />
            </FormGroup>
  
            <FormGroup controlId="birthday">
              <FormLabel className='text-style'>Birthday</FormLabel>
              <FormControl 
              type='date' 
              name='birthday' 
              className="bgd-style"
              label="Birthday"
              defaultValue={user.result.birthday}
              onChange={handleChange}
            />
            </FormGroup>
  
            <FormGroup controlId="confirmPassword">
              <FormLabel className='text-style'>Repeat Password</FormLabel>
              <FormControl 
              type='password' 
              name='confirmation_password' 
              className="bgd-style"
              label="confirmPassword"
              placeholder="Confirm your password"
              onChange={handleChange}
            />
            </FormGroup>
  
          </FormGroup>
        </Form>
      </div>
    );
  };
  export default MyProfileForm;