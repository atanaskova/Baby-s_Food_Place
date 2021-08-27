import React from 'react';
import {useSelector} from 'react-redux';
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton';
import '../../styles/Dashboard.css';
import '../../styles/Modal.css';
import Recipe from '../Recipe/Recipe';

const MostPopularRecipes=()=>{
    const recipes=useSelector((state)=>state.recipes)
    const popular=recipes;
    
    function mostPopular(a,b){
        if(a.likes.length>b.likes.length){
            return 1;
        }else if(a.likes.length<b.likes.length){
            return -1;
        }
        return 0;
    }

    popular.sort(mostPopular);

    return (
        !recipes.length ? 
        <SkeletonTheme color="#F5BE14"> 
            <Skeleton className="skeleton" count={6}/>
        </SkeletonTheme> : (             
        <div className="container-fluid" style={{width:800}}>

             <div className="separator">
                <h2>Most Popular Recipes</h2>
                <div className="line2"></div>
            </div>

            <div className="row" style={{paddingTop:20}}>
                {popular.slice(-6).map((recipe)=>(
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