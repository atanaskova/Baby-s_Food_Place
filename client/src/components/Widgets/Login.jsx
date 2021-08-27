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
                Join other Baby's Food Place users and get access to thousands of recipes, cooking tips and hacks.
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