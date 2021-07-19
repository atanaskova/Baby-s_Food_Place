import React from 'react';
import '../../styles/Modal.css';

const RecipeFooter=()=>{
    return(
    <div className="footer">
        <i className="bi bi-clock"> 45 min</i>
        <i className="bi bi-people"> 4 persons</i>
        <i className="bi bi-star" data-toggle="tooltip" title="I like this!"> 28</i>
    </div>
    )
}

export default RecipeFooter;