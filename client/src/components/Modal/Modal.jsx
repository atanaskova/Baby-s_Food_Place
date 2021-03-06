import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import ModalContent from './ModalContent';

const ModalWindow = ({recipe}) => {
    const [isOpen, setIsOpen] = useState(false);
    const showModal = () => {
        setIsOpen(true);
      };
    
      const hideModal = () => {
        setIsOpen(false);
      };
 
      return (
        <span>
            <i className="bi bi-arrow-right-square-fill pulse" onClick={showModal} data-toggle="tooltip" title="Show me more!"/>
            <Modal show={isOpen} onHide={hideModal} recipe={recipe}>
                <ModalContent hideModal={hideModal} recipe={recipe}/>
            </Modal>
        </span>
  );
};

export default ModalWindow;