import React from 'react';
import LoginInputForm from './LoginForm';
import Header from '../MainPage/Header';
import Footer from '../MainPage/Footer';
import '../../styles/Login.css';

const Login = () => {
  return (
    <div>
      <Header />

      <div className="container-fluid" style={{width:780}}>
          
          <div className="separator4">
              <h2>Log In</h2>
              <div className="line4"></div>
          </div>

          <div className="login-form">
              <div className="first-box">
                <p className="welcome-title">
                  <span id="orange-letters-login">Welcome to</span>
                  <br/>
                  <span id="black-letters-login">Baby's</span>
                </p>

                <p className="text-box-login">
                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                </p>
              </div>

              <div className="log-form-box">
                <LoginInputForm className="login-input" />
              </div>
          </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;