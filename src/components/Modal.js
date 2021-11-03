import React from 'react'
import '../components/Modal.css'

const Modal = ({selectedImg, setSelectedImg}) => {

    const handleClick = (event) =>{
        if(event.target.classList.contains('backdrop')){
            setSelectedImg(null);
        }
    }

    return (
        <div className="backdrop" onClick ={handleClick}>
            <img src={selectedImg} alt ="enlarged pic"/>
            
        </div>
    )
}

export default Modal
