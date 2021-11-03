import React from 'react';
import useFirestore from '../hooks/useFirestore';
import '../components/ImageContainer.css';

const ImageContainer = ({setSelectedImg}) => {

    const {docs} = useFirestore('images');
    console.log(docs);

    return (
        <div className="image_container"> 
            {docs && docs.map(doc =>(
                <div className="image_wrap" key = {doc.id}
                    onClick ={()=> setSelectedImg(doc.url)}
                
                >

                    <img src ={doc.url} alt="uploaded pic"/>
                </div>
            ))}
        </div>
    )
}

export default ImageContainer;
