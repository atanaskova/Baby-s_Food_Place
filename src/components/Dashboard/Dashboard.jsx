import React from 'react';
import '../../styles/Dashboard.css';
import FreshNewRecipes from './FreshNewRecipes';
import MostPopularRecipes from './MostPopularRecipes';

const Dashboard=()=>{
    return(
        <div className="container-fluid bg">
            <FreshNewRecipes/>      
            <MostPopularRecipes/>
        </div>
    )
}

export default Dashboard;