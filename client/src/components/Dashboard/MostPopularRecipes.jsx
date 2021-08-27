import React from 'react';
import {useSelector} from 'react-redux';
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton';
import '../../styles/Dashboard.css';
import '../../styles/Modal.css';
import Recipe from '../Recipe/Recipe';

const MostPopularRecipes=()=>{
    const recipes=useSelector((state)=>state.recipes)
    const last=recipes.slice(-3);

    return (
        !recipes.length ? 
        <SkeletonTheme color="#F5BE14"> 
            <Skeleton className="skeleton" count={3}/>
        </SkeletonTheme> : (             
        <div className="container-fluid" style={{width:780}}>

             <div className="separator">
                <h2>Most Popular Recipes</h2>
                <div className="line2"></div>
            </div>

            <div className="row" style={{paddingTop:20}}>
                {last.map((recipe)=>(
                    <div 
                        key={recipe._id}
                        className="card">
                        <Recipe recipe={recipe}/>
                    </div>
                ))}
            </div>
        </div>
        )
    )
}
export default MostPopularRecipes;