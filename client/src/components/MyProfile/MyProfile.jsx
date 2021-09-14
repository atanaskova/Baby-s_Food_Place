import React from 'react';
import '../../styles/MyProfile.css';
import Header from '../MainPage/Header';
import Footer from '../MainPage/Footer';
import MyProfileForm from './MyProfileForm';

const MyProfile=()=>{
    return(
        <div>

            <Header />

            <div className="container-fluid" style={{width:780}}>
                
                <div className="separator4">
                    <h2>My Profile</h2>
                    <div className="line4"></div>
                </div>

                <div className="my-profile-form">
                    <div className="my-profile-input-box">
                        <MyProfileForm className="my-profile-input"/>
                    </div>
                </div>
            </div>


            <Footer />

        </div>
    );
};

export default MyProfile;