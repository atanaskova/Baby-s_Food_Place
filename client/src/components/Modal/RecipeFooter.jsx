import React from 'react';
import '../../styles/Modal.css';

const RecipeFooter=({recipe})=>{
    return(
    <div className="footer">
        <i className="bi bi-clock">{recipe.preparation_time} minutes</i>
        <i className="bi bi-people">{recipe.no_people} people</i>
        <i className="bi bi-star" data-toggle="tooltip" title="I like this!">{recipe.likes}</i>
    </div>
    )
}

export default RecipeFooter;