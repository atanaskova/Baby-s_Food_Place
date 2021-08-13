import React from 'react';
import '../../styles/Modal.css';
import RecipeImg from './RecipeImg';
import RecipeDetails from './RecipeDetails';
import RecipeDescription from './RecipeDescription';
import RecipeFooter from './RecipeFooter';
import RecipeHeader from './RecipeHeader';

const ModalContent=({hideModal,recipe})=>{
    return(
        <div className="modal-bg">
                <RecipeHeader hideModal={hideModal} title={recipe.recipe_title}/>
                <RecipeImg img={recipe.recipe_picture}/>
                <RecipeDetails details={recipe.recipe_details}/>
                <RecipeDescription recipe={recipe}/>
                <RecipeFooter recipe={recipe}/>
        </div>
    )
}

export default ModalContent;