import React from 'react';
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from 'react-redux';
import {deleteRecipe} from '../../actions/recipes';
import { useTrail, animated as a } from "react-spring";

const config = { mass: 5, tension: 2000, friction: 200 };

const TableRow = ({createdOn}) => {
  const dispatch=useDispatch();
  const recipes=useSelector((state)=>state.recipes)

  const trail = useTrail(recipes.length, {
    config,
    opacity: 1,
    x: 0,
    height: 80,
    from: { opacity: 0, x: 20, height: 0 }
  });

  return (
    trail.map(({ x, height, ...rest }, index) => (
        <a.tr className="py-5" key={recipes[index]._id} 
          style={{
            ...rest,
            transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
          }}>
          <td className="py-3 font-weight-bold"
          style={{ height }}>
            {recipes[index].recipe_title}
          </td>
          <td className="py-3">
            <Button className="font-weight-bold categorybtn">
              {recipes[index].category.toUpperCase()}
            </Button>
          </td>
          <td className="py-3">{createdOn}</td>
          <td></td>
          <td></td>
          <td className="py-3" colSpan="2">
            <i className="bi bi-trash-fill" onClick={()=>dispatch(deleteRecipe(recipes[index]._id))}></i>
          </td>
        </a.tr>
      ))
  );
};
export default TableRow;