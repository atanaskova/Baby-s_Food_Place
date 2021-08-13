import React from 'react';
import { useDispatch } from 'react-redux';
import '../../styles/Dashboard.css';
import ModalWindow from '../Modal/Modal';
import {likeRecipe} from '../../actions/recipes';

const Recipe=({recipe})=>{
    // const likes=recipe.likes.length;
    // const likes=recipe.likes;
    const dispatch=useDispatch();

    // const handleLikes=()=>{
    //     dispatch(likeRecipe(recipe));
    // }

    return(
        <div className="col-md-4">
            <img className="card-img-top" src={`${recipe.recipe_picture}`} alt='Recipe'/>

            <span className="badge badge-pill pill-a" style={{fontSize:10}}>{recipe.category}</span>

            <div className="card-body">
                <h6 className="card-title">{recipe.recipe_title}</h6>

                <div className="card-text">{recipe.recipe_description}</div>

                <span className="card-body F">

                    <i className="bi bi-clock">{recipe.preparation_time} minutes</i>

                    <i className="bi bi-people">{recipe.no_people} people</i>

                    <i className="bi bi-star" data-toggle="tooltip" title="I like this!" onClick={()=>{}}>{recipe.likes}</i>

                    <ModalWindow recipe={recipe}/>
                </span>

            </div>
    </div>
    )
}

export default Recipe;