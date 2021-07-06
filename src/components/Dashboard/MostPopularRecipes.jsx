import React from 'react';
import '../../styles/Dashboard.css';
import ModalWindow from '../Modal/Modal';
import img1 from '../../images/energybooster.png';
import img2 from '../../images/macandbacon.jpg';
import img3 from '../../images/veggieslasagna.png';
import img4 from '../../images/schrimppaela.png';
import img5 from '../../images/swedishmeatballs.png';
import img6 from '../../images/chickenbrocolisoup.png';

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
                        <img className="card-img-top" src={img1} alt="Energy Booster"/>
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

                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src={img2} alt="Mac & Bacon"/>
                        <span className="badge badge-pill pill-a" style={{fontSize:10}}>breakfast</span>
                        <div className="card-body">
                            <h6 className="card-title">Mac & Bacon</h6>
                            <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.</p>
                        </div>
                        <div className="card-body F">
                            <i className="bi bi-clock"> 45 min</i>
                            <i className="bi bi-people"> 4 persons</i>
                            <i className="bi bi-star" data-toggle="tooltip" title="I like this!"> 28</i>
                            <ModalWindow/>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src={img3} alt="Veggies Lasagna"/>
                        <span className="badge badge-pill pill-a" style={{fontSize:10}}>dinner</span>
                        <div className="card-body">
                            <h6 className="card-title">Veggies Lasagna</h6>
                            <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.</p>
                        </div>
                        <div className="card-body F">
                            <i className="bi bi-clock"> 45 min</i>
                            <i className="bi bi-people"> 4 persons</i>
                            <i className="bi bi-star" data-toggle="tooltip" title="I like this!"> 28</i>
                            <ModalWindow/>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src={img4} alt="Schrimp Paela"/>
                        <span className="badge badge-pill pill-a" style={{fontSize:10}}>lunch</span>
                        <div className="card-body">
                            <h6 className="card-title">Schrimp Paela</h6>
                            <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.</p>
                        </div>
                        <div className="card-body F">
                            <i className="bi bi-clock"> 45 min</i>
                            <i className="bi bi-people"> 4 persons</i>
                            <i className="bi bi-star" data-toggle="tooltip" title="I like this!"> 28</i>
                            <ModalWindow/>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src={img5} alt="Swedish Meatballs"/>
                        <span className="badge badge-pill pill-a" style={{fontSize:10}}>brunch</span>
                        <div className="card-body">
                            <h6 className="card-title">Swedish Meatballs</h6>
                            <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.</p>
                        </div>
                        <div className="card-body F">
                            <i className="bi bi-clock"> 45 min</i>
                            <i className="bi bi-people"> 4 persons</i>
                            <i className="bi bi-star" data-toggle="tooltip" title="I like this!"> 28</i>
                            <ModalWindow/>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src={img6} alt="Chicken Brocoli Soup"/>
                        <span className="badge badge-pill pill-a" style={{fontSize:10}}>breakfast</span>
                        <div className="card-body">
                            <h6 className="card-title">Chicken Brocoli Soup</h6>
                            <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.</p>
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