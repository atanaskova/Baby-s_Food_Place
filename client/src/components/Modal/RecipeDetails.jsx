import React from 'react';
import '../../styles/Modal.css';

const RecipeDetails=({details})=>{
    return(
        <div className="details">
            <h6>
                Recipe Details
            </h6>
            <p>{details}</p>
        </div>
    )
}

export default RecipeDetails;