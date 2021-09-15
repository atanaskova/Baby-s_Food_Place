import React from 'react';
import '../../styles/Modal.css';

const RecipeHeader=({hideModal,title})=>{
    return(
        <div className="modal-header">
            <h1 className="title">{title}</h1>
            <i className="bi bi-x" onClick={hideModal} data-toggle="tooltip" title="Close"/>      
        </div>
    )
}

export default RecipeHeader;