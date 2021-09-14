import React,{useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton';
import '../../styles/Category.css';
import '../../styles/Modal.css';
import Recipe from '../Recipe/Recipe';
import Header from '../MainPage/Header';
import Footer from '../MainPage/Footer';
import {getRecipesByCategory} from '../../actions/recipes';

const Category=()=>{
    const dispatch=useDispatch();
    const params=useParams();
    
    useEffect(()=>{
        dispatch(getRecipesByCategory(params.category));
      },[dispatch]);

    const recipes=useSelector((state)=>state.recipes)
  
    return (
        <div>
            <Header />

            <div className="container-fluid bg" >
        
                {!recipes.length ? 
                    <SkeletonTheme color="#F5BE14"> 
                        <Skeleton className="skeleton6" count={6}/>
                    </SkeletonTheme> : (             
                <div className="container-fluid" style={{width:810}}>
                    <div className="separator6">
                        <h2>{params.category.charAt(0).toUpperCase() + params.category.slice(1)}</h2>
                        <div className="line6"></div>
                    </div>

                    <div className="row" style={{paddingTop:20,paddingLeft:10}}>
                        {recipes.map((recipe)=>(
                            <div 
                                key={recipe._id}
                                className="card">
                                <Recipe recipe={recipe}/>
                            </div>
                        ))}
                    </div>
                </div>
                )}
            </div>

            <Footer />
        </div>
        )
}

export default Category;