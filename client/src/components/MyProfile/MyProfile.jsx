import React from 'react';
import FileBase from 'react-file-base64';
import '../../styles/MyProfile.css';
import img from '../../images/avatar.png';
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
                    <div id="first-box-1">
                    <span className="img-upload">
                        <img id="user-img" alt="avatar" src={img}/><br/>
                        <FileBase 
                        type="file" 
                        multiple={false}
                        // onDone={({base64})=>setRecipeData({...recipeData, recipe_picture:base64})}
                        />
                    </span>
                    </div>

                    <div className="my-profile-input-box">
                        <MyProfileForm className="my-profile-input" />
                    </div>
                </div>
            </div>


            <Footer />

        </div>
    );
};

export default MyProfile;