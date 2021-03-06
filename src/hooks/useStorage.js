import {useState, useEffect} from 'react'
import { projectStorage, projectFirestore, timestamp } from '../firebase/config'

const useStorage = (post) =>{
    const [progress,setProgress] = useState(0);
    const [error,setError] = useState(null);
    const [url,setUrl] = useState(null);



    useEffect(()=>{
        //references
        const storageRef = projectStorage.ref(post.pic.name);
        const collectionRef = projectFirestore.collection('images')

        storageRef.put(post.pic).on('state_changed', (snap) =>{
            let percentage = (snap.bytesTransferred / snap.totalBytes) *100;
            setProgress(percentage);
        }, (err) =>{
            setError(err)
        }, async()=>{
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            const about = post.msg;
            collectionRef.add({url, createdAt, about})
            setUrl(url);

        })
    }, [post.pic]);

    return {progress,url,error}

}

export default useStorage;