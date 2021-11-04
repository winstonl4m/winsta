import React from 'react'
import '../components/Modal.css'

const Modal = ({selectedImg, setSelectedImg, selectedAbout, setSelectedAbout}) => {

    const handleClick = (event) =>{
        if(event.target.classList.contains('backdrop')){
            setSelectedImg(null);
            setSelectedAbout(null);
        }
    }

    return (
        <div className="backdrop" onClick ={handleClick}>

                <img src={selectedImg} alt ="enlarged pic"/>
                <div className="backdrop_about">{selectedAbout}</div>

            
        </div>
    )
}

export default Modal
