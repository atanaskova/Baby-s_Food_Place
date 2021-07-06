import React from 'react';
import '../../styles/Modal.css';
const img = require('../../images/macandbacon.jpg');

const ModalImg=()=>{
    return(
        <img src={img} alt="Mac&Bacon" className="modalImg"/>
    )
}

export default ModalImg;
