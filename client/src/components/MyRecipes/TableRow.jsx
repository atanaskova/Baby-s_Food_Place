import React from 'react';
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import {deleteRecipe} from '../../actions/recipes';
import { useTrail, animated as a } from "react-spring";
import moment from 'moment';

const config = { mass: 5, tension: 2000, friction: 200 };

const TableRow = () => {
  const dispatch=useDispatch();
  const recipes=useSelector((state)=>state.recipes);
  const user=JSON.parse(localStorage.getItem('profile'));
  const myrecipes=[];
  const history=useHistory();

  function myRecipes(recipes){
    recipes.map((recipe)=>{
      if(user.result._id===recipe.user){
        myrecipes.push(recipe);
      }
      return myrecipes;
    })
  }

  myRecipes(recipes);


  const getDate=(date)=>{
    let hours = moment().diff(moment(date),'hours');
    if(hours>=24){
      return moment(date).format("MMM Do YYYY");
    }else{
      return moment(date).fromNow();
    }
  }

  const trail = useTrail(myrecipes.length, {
    config,
    opacity: 1,
    x: 0,
    height: 80,
    from: { opacity: 0, x: 20, height: 0 }
  });

  return (
    myrecipes.length ?  (
      trail.map(({ x, height, ...rest }, index) => (
        <a.tr className="py-5" key={myrecipes[index]._id} 
          style={{
            ...rest,
            transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
          }}>
          <td className="py-3 font-weight-bold"
          style={{ height }}>
            {myrecipes[index].recipe_title}
          </td>
          <td className="py-3">
            <Button onClick={()=>history.push(`/${myrecipes[index].category}`)} className="font-weight-bold categorybtn">
              {myrecipes[index].category.toUpperCase()}
            </Button>
          </td>
          <td className="py-3">
          {getDate(myrecipes[index].created)}
          </td>
          <td></td>
          <td></td>
          <td className="py-3" colSpan="2">
            <i className="bi bi-trash-fill" onClick={()=>dispatch(deleteRecipe(myrecipes[index]._id))}></i>
          </td>
        </a.tr>
      ))
      ):<div style={{height:100}}></div>
  );
};
export default TableRow;