import React from 'react';
import CreateAccForm from './CreateAccForm';
import Header from '../MainPage/Header';
import Footer from '../MainPage/Footer';
import '../../styles/CreateAcc.css';

const CreateAccount = () => {
    return (
        <div>
            <Header />

            <div className="container-fluid" style={{width:780}}>
                
                <div className="separator3">
                    <h2>Create Account</h2>
                    <div className="line3"></div>
                </div>

                <div className="create-acc-form">
                    <div id="first-box-1">
                        <p className="createacc-title">
                            <span id="orange-letters">Create your</span>
                            <br/>
                            <span id="black-letters">account</span>
                        </p>

                        <p className="text-box">
                        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                        </p>
                    </div>

                    <div className="create-acc-input-box">
                        <CreateAccForm className="create-acc-input" />
                    </div>
                </div>
            </div>

        <Footer />
    </div>
    );
};

export default CreateAccount;