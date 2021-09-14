import React,{useState,useEffect} from 'react';
import '../../styles/Dashboard.css';
import Header from './Header';
import Footer from './Footer';
import Dashboard from '../Dashboard/Dashboard';
import Lottie from "react-lottie";
import * as animationData from "./25523-wok-pan-food-fry-on-fire.json";

const Main = () => {
    const [loading, setLoading] = useState(false);
    
    const options = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };    

    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 5000);
        
    }, [ ]);

    return(
        loading?(
        <div>
            <Lottie options={options} height={500} width={500} />
        </div>
        ):(
        <div>
            <Header />
                <Dashboard />
            <Footer />
        </div>
        )
    )
}

export default Main; 