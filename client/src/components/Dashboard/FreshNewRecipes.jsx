import React from 'react';
import {useSelector} from 'react-redux';
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton';
import '../../styles/Dashboard.css';
import '../../styles/Modal.css';
import Recipe from '../Recipe/Recipe';
import {useSpring, animated} from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const FreshNewRecipes=()=>{
    const [props,set]=useSpring(()=>({xys:[0,0,1], config:{ mass: 5, tension: 350, friction: 40 }}));
    const recipes=useSelector((state)=>state.recipes)
    const last=recipes.slice(-3);
    
    return (
        !recipes.length ? 
            <SkeletonTheme color="#F5BE14"> 
                <Skeleton className="skeleton" count={3}/>
            </SkeletonTheme> : (             
        <div className="container-fluid" style={{width:800}}>
            <div className="separator">
                <h2>Fresh & New</h2>
                <div className="line1"></div>
            </div>

            <div className="row" style={{paddingTop:20}}>
                {last.map((recipe)=>(
                    <animated.div 
                        key={recipe._id}
                        onMouseOver={({clientX:x, clientY:y})=>(set({xys:calc(x,y)}))}
                        onMouseLeave={()=>set({xys:[0,0,1]})}
                        style={{transform:props.xys.interpolate(trans)}}
                        className="card">
                        <Recipe recipe={recipe}/>
                    </animated.div>
                ))}
            </div>
        </div>
        )
    )
}

export default FreshNewRecipes;