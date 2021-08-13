import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import '../../styles/Dashboard.css';
import FreshNewRecipes from './FreshNewRecipes';
import MostPopularRecipes from './MostPopularRecipes';
import {getRecipes} from '../../actions/recipes';

const Dashboard=()=>{
    const dispatch=useDispatch();

    useEffect(()=>{
      dispatch(getRecipes());
    },[dispatch]);  
    return(
            <div className="container-fluid bg" style={{paddingLeft:55}}>
                <FreshNewRecipes/>      
                <MostPopularRecipes/>
            </div>
    )
}

export default Dashboard;