import {useState, useEffect} from 'react'
import { projectFirestore } from '../firebase/config'


//grabs the image collection from firebase data 
const useFirestore = (collection) => {
    const [docs, setDocs] = useState([])

    useEffect(()=>{
        const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            //listens to real-time update when collection is updated
            .onSnapshot((snap)=>{
                let documents = [];
                snap.forEach(doc =>{
                    //gets all the data from database, as well as the id associated
                    // with it
                    documents.push({...doc.data(), id: doc.id})
                });
                setDocs(documents);
            });
        // unsubscribe from the collection when we don't need it
        return () => unsub();
    },[collection])

    return {docs};
}


export default useFirestore;