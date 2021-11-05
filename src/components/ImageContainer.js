import React from 'react';
import useFirestore from '../hooks/useFirestore';
import '../components/ImageContainer.css';
import { motion } from "framer-motion"


const ImageContainer = ({setSelectedImg, setSelectedAbout, setSelectedTime}) => {

    const {docs} = useFirestore('images');
    console.log(docs);

    const convert = (timestamp) => {
        const date = "Posted on " + timestamp.toDate().toDateString().split(' ').slice(1).join(' ');
        setSelectedTime(date);
    }





    return (
        <div className="image_container"> 
            {docs && docs.map(doc =>(
                <motion.div className="image_wrap" key = {doc.id}
                    onClick ={()=> {setSelectedImg(doc.url);setSelectedAbout(doc.about);console.log(doc.createdAt);convert(doc.createdAt)}}
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
