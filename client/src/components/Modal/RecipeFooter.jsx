import React from 'react';
import { useDispatch } from 'react-redux';
import '../../styles/Modal.css';
import {likeRecipe} from '../../actions/recipes';

const RecipeFooter=({recipe})=>{
    const dispatch=useDispatch();
    const user=JSON.parse(localStorage.getItem('profile'));

    const Likes = () => {
        if (recipe.likes.length > 0) {
          return recipe.likes.find((like) => like === (user.result.googleId || user.result._id))
            ? (
              <div><i className="bi bi-star-fill" />{recipe.likes.length} {recipe.likes.length === 1 ? 'Like' : 'Likes'}</div>
            ) : (
              <div><i className="bi bi-star" />{recipe.likes.length} {recipe.likes.length === 1 ? 'Like' : 'Likes'}</div>
            );
        }
        return <div><i className="bi bi-star" />Like</div>;
    };

    return(
    <div className="footer">
        <i className="bi bi-clock">{recipe.preparation_time} minutes</i>
        <i className="bi bi-people">{recipe.no_people} people</i>
        <span data-toggle="tooltip" title="I like this!" disabled={!user.result} onClick={()=>dispatch(likeRecipe(recipe._id))}><Likes /></span>
    </div>
    )
}

export default RecipeFooter;