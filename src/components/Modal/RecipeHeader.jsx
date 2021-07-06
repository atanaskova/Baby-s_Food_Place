import React from 'react';
import '../../styles/Modal.css';

const RecipeHeader=({hideModal})=>{
    return(
        <div className="header">
            <h1 className="title">
                Mac & Bacon (and cheese)
            </h1>
            <i className="bi bi-x" onClick={hideModal} data-toggle="tooltip" title="Close"/>      
        </div>
    )
}

export default RecipeHeader;