import React from 'react';
import useFirestore from '../hooks/useFirestore';
import '../components/ImageContainer.css';

const ImageContainer = ({setSelectedImg, setSelectedAbout}) => {

    const {docs} = useFirestore('images');
    console.log(docs);





    return (
        <div className="image_container"> 
            {docs && docs.map(doc =>(
                <div className="image_wrap" key = {doc.id}
                    onClick ={()=> {setSelectedImg(doc.url);setSelectedAbout(doc.about);}}
                
                >

                    <img src ={doc.url} alt="uploaded pic"/>
                    <h3 className="image_about">{doc.about}</h3>
                </div>
            ))}
        </div>
    )
}

export default ImageContainer;
