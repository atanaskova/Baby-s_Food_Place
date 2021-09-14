import React from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import '../../styles/Modal.css';
import {likeRecipe} from '../../actions/recipes';

const RecipeFooter=({recipe})=>{
    const dispatch=useDispatch();
    const history=useHistory();
    const user=JSON.parse(localStorage.getItem('profile'));

    const Likes = () => {
      if(typeof recipe.likes=== 'undefined'){
        return <span className="likes-count"><i className="bi bi-star" />Like</span>;
      }else
        if (recipe.likes.length-1 > 0) {
          if(user){
          return recipe.likes.find((like) => like === (user.result.googleId || user.result._id))
            ? (
              <span className="likes-count"><i className="bi bi-star-fill" />{recipe.likes.length-1} {recipe.likes.length-1 === 1 ? 'like' : 'likes'}</span>
            ) : (
              <span className="likes-count"><i className="bi bi-star" />{recipe.likes.length-1} {recipe.likes.length-1 === 1 ? 'like' : 'likes'}</span>
            );
          }else{
            return <span className="likes-count"><i className="bi bi-star"/>{recipe.likes.length-1} {recipe.likes.length-1 === 1 ? 'like' : 'likes'}</span>
            }
        }else{
        return <span className="likes-count"><i className="bi bi-star" />Like</span>;
        }
      };

    return(
    <div className="footer">
        <i className="bi bi-clock">{recipe.preparation_time} minutes</i>
        <i className="bi bi-people">{recipe.no_people} people</i>
        <span className="likes-count" data-toggle="tooltip" title="I like this!" onClick={
        user ? (()=>dispatch(likeRecipe(recipe._id))) : (()=>history.push('/login'))}><Likes /></span>
    </div>
    )
}

export default RecipeFooter;