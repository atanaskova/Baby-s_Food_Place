import React from 'react';
import '../../styles/Dashboard.css';
import ModalWindow from '../Modal/Modal';

const MostPopularRecipes=()=>{
    return (
        <div className="container-fluid" style={{width:780}}>

             <div className="separator">
                <h2>Most Popular Recipes</h2>
                <div className="line2"></div>
            </div>

            <div className="row" style={{paddingTop:20}}>
                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src='' alt="Energy Booster"/>
                        <span className="badge badge-pill pill-a" style={{fontSize:10}}>dinner</span>
                        <div className="card-body">
                            <h6 className="card-title">Energy Booster</h6>
                            <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                        </div>
                        <div className="card-body F">
                            <i className="bi bi-clock"> 45 min</i>
                            <i className="bi bi-people"> 4 persons</i>
                            <i className="bi bi-star" data-toggle="tooltip" title="I like this!"> 28</i>

                            <ModalWindow/>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MostPopularRecipes;