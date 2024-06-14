import React from 'react';
import useFirestore from '../hooks/useFirestore';
import '../components/ImageContainer.css';
import { motion } from "framer-motion"

//when we select an image, sets the post for the modal to display
const ImageContainer = ({setSelectedImg, setSelectedAbout, setSelectedTime}) => {

    //calls useFireStore in hooks, returns a collection of data
    // in the 'images' collection, with each data containing
    // a url pic, about, and time created
    const {docs} = useFirestore('images');
    

    //converts timestamp when photo is clicked on the image container
    const convert = (timestamp) => {
        const date = "Posted on " + timestamp.toDate().toDateString().split(' ').slice(1).join(' ');
        setSelectedTime(date);
    }





    // mapes out the images in container
    // sets selected image for the modal to display
    return (
        <div className="image_container"> 
            {docs && docs.map(doc =>(
                <motion.div className="image_wrap" key = {doc.id}
                    onClick ={()=> {setSelectedImg(doc.url);setSelectedAbout(doc.about);convert(doc.createdAt)}}
                    whileHover={{opacity: 1}}
                >

                    <motion.img 
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.5}}
                        src ={doc.url} 
                        alt="uploaded pic"/>
                    
                </motion.div>
            ))}
        </div>
    )
}

export default ImageContainer;
