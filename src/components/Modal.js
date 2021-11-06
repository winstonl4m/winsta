import React from 'react'
import '../components/Modal.css'
import { motion } from "framer-motion"


const Modal = ({selectedImg, setSelectedImg, selectedAbout, setSelectedAbout, selectedTime,setSelectedTime}) => {

    const handleClick = (event) =>{
        if(event.target.classList.contains('backdrop')){
            
            setSelectedImg(null);
            setSelectedAbout(null);
            setSelectedTime(null);
           
        }
    }

    return (
        <motion.div className="backdrop" onClick ={handleClick} initial={{opacity: 0}} animate={{opacity: 1}}>

                
                    
                    

                    <div className="container">
                        <img src={selectedImg} alt ="enlarged pic">
                        </img>
                        <div className="about">{selectedAbout}</div>
                        <div className="time">{selectedTime}</div>

                    </div>
                    
                        
             
                
                
                
                
                

            
        </motion.div>
    )
}

export default Modal
