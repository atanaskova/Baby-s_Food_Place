import React from 'react';
import '../../styles/Modal.css';

const RecipeDescription=()=>{
    return(
        <div className="description">
            <div className="descr-header">
                <h6>
                    Best Served For 
                </h6>
                <span className="badge badge-pill pill-b" style={{lineHeight:1.5}}>lunch</span>
            </div>

            <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                as opposed to using ‘Content here, content here’,
                making it look like readable English.
            </p>
        </div>
    )
}

export default RecipeDescription;