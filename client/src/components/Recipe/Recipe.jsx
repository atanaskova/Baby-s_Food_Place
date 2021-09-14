import React from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import '../../styles/Dashboard.css';
import ModalWindow from '../Modal/Modal';
import {likeRecipe} from '../../actions/recipes';

const Recipe=({recipe})=>{
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
        <div className="col-md-4">
            <img className="card-img-top" src={`${recipe.recipe_picture}`} alt='Recipe'/>

            <span className="badge badge-pill pill-a" style={{fontSize:10}}>{recipe.category}</span>

            <div className="card-body">
                <h6 className="card-title">{recipe.recipe_title}</h6>

                <div className="card-text">{recipe.recipe_description}</div>

                <span className="card-body F">

                    <i className="bi bi-clock">{recipe.preparation_time} minutes</i>

                    <i className="bi bi-people">{recipe.no_people} people</i>

                  <span className="likes-count" data-toggle="tooltip" title="I like this!" onClick={
                    user ? (()=>dispatch(likeRecipe(recipe._id))) : (()=>history.push('/login'))}><Likes /></span>
                    <ModalWindow recipe={recipe}/>
                </span>

            </div>
    </div>
    )
}

export default Recipe;