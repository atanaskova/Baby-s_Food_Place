import React from 'react';
import '../../styles/Modal.css';

const RecipeDescription=({recipe})=>{
    return(
        <div className="description">
            <div className="descr-header">
                <h6>
                    Best Served For 
                </h6>
                <span className="badge badge-pill pill-b" style={{lineHeight:1.5}}>{recipe.category}</span>
            </div>

            <p>{recipe.recipe_description}</p>
        </div>
    )
}

export default RecipeDescription;