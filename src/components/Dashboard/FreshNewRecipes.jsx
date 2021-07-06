import React from 'react';
import '../../styles/Dashboard.css';
import '../../styles/Modal.css';
import ModalWindow from '../Modal/Modal';
import img1 from '../../images/homemadepizza.png';
import img2 from '../../images/seaspaghetti.png';
import img3 from '../../images/easytacos.png';
import {useSpring, animated} from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const FreshNewRecipes=()=>{
    const [props,set]=useSpring(()=>({xys:[0,0,1], config:{ mass: 5, tension: 350, friction: 40 }}))
    return (
        <div className="container-fluid" style={{width:780}}>
            
            <div className="separator">
                <h2>Fresh & New</h2>
                <div className="line1"></div>
            </div>

            <div className="row" style={{paddingTop:20}}>
                <div className="col-md-4">
                    <animated.div onMouseOver={({clientX:x, clientY:y})=>(set({xys:calc(x,y)}))}
                    onMouseLeave={()=>set({xys:[0,0,1]})}
                    style={{
                        transform:props.xys.interpolate(trans)
                    }}
                    className="card">
                        <img className="card-img-top" src={img1} alt="Homemade Pizza"/>
                        <span className="badge badge-pill pill-a" style={{fontSize:10}}>breakfast</span>
                        <div className="card-body">
                            <h6 className="card-title">Homemade Pizza</h6>
                            <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.</p>
                        </div>
                        <div className="card-body F">
                            <i className="bi bi-clock"> 45 min</i>
                            <i className="bi bi-people"> 4 persons</i>
                            <i className="bi bi-star" data-toggle="tooltip" title="I like this!"> 28</i>

                            <ModalWindow/>
                        </div>
                    </animated.div>
                </div>

                <div className="col-md-4">
                    <animated.div onMouseOver={({clientX:x, clientY:y})=>(set({xys:calc(x,y)}))}
                    onMouseLeave={()=>set({xys:[0,0,1]})}
                    style={{
                        transform:props.xys.interpolate(trans)
                    }}
                    className="card">
                        <img className="card-img-top" src={img2} alt="Sea Spaghetti"/>
                        <span className="badge badge-pill pill-a" style={{fontSize:10}}>lunch</span>
                        <div className="card-body">
                            <h6 className="card-title">Sea Spaghetti</h6>
                            <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.</p>
                        </div>
                        <div className="card-body F">
                            <i className="bi bi-clock"> 45 min</i>
                            <i className="bi bi-people"> 4 persons</i>
                            <i className="bi bi-star" data-toggle="tooltip" title="I like this!"> 28</i>

                            <ModalWindow/>

                        </div>
                    </animated.div>
                </div>

                <div className="col-md-4">
                    <animated.div onMouseOver={({clientX:x, clientY:y})=>(set({xys:calc(x,y)}))}
                    onMouseLeave={()=>set({xys:[0,0,1]})}
                    style={{
                        transform:props.xys.interpolate(trans)
                    }}
                    className="card">
                        <img className="card-img-top" src={img3} alt="Easy Tacos"/>
                        <span className="badge badge-pill pill-a" style={{fontSize:10}}>brunch</span>
                        <div className="card-body">
                            <h6 className="card-title">Easy Tacos</h6>
                            <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.</p>
                        </div>
                        <div className="card-body F">
                            <i className="bi bi-clock"> 45 min</i>
                            <i className="bi bi-people"> 4 persons</i>
                            <i className="bi bi-star" data-toggle="tooltip" title="I like this!"> 28</i>

                            <ModalWindow/>

                        </div>
                    </animated.div>
                </div>

            </div>
        </div>
    )
}

export default FreshNewRecipes;