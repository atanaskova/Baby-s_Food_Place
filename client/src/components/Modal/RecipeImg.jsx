import React from 'react';
import '../../styles/Modal.css';

const ModalImg=({img})=>{
    return(
        <img className="modalImg" src={`${img}`} alt='Recipe'/>
    )
}

export default ModalImg;
