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

                        <p className="text-box-register">
                            Wondering what to make for dinner tonight? <br/>
                            Baby's Food Place is here to help you cook delicious meals with less stress and more joy. <br/>
                            We offer recipes and cooking advice for home cooks, by home cooks. <br/>
                            Find thousands of popular recipes approved by our test kitchen and cooked by our community. Browse easy recipes for breakfast, lunch, brunch, dinner and more.
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