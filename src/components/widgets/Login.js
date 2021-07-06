import React from 'react';
import LoginInputForm from './LoginForm';
import '../../styles/Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="div-login">
        <h3 id="login-title">Log In</h3> <hr id="hr8" />
      </div>
      <div className="login-form">
        <div className="first-box">
          <p className="welcome-title">
            <span id="orange-letters-login">Welcome to</span>
            <span id="black-letters-login">Baby's</span>
          </p>
          <p className="text-box-login">
            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.                    </p>
        </div>
        <div className="log-form-box">
          <LoginInputForm className="login-input" />
        </div>
      </div>
    </div>
  );
};

export default Login;