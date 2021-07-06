import React from 'react';
import '../../styles/Modal.css';
import RecipeImg from './RecipeImg';
import RecipeDetails from './RecipeDetails';
import RecipeDescription from './RecipeDescription';
import RecipeFooter from './RecipeFooter';
import RecipeHeader from './RecipeHeader';

const ModalContent=({hideModal})=>{
    return(
        <div className="modal-bg">
                <RecipeHeader hideModal={hideModal}/>
                <RecipeImg/>
                <RecipeDetails/>
                <RecipeFooter/>
                <RecipeDescription/>
        </div>
    )
}

export default ModalContent;