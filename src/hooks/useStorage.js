import {useState, useEffect} from 'react'
import { projectStorage, projectFirestore, timestamp } from '../firebase/config'

//submits image post to firebase
const useStorage = (post) =>{
    const [progress,setProgress] = useState(0);
    const [error,setError] = useState(null);

    //image url we get back from firebase after the image is uploaded
    const [url,setUrl] = useState(null);


    //runs everytime there is a new pic submission
    useEffect(()=>{
        //reference to the file name
        const storageRef = projectStorage.ref(post.pic.name);
        const collectionRef = projectFirestore.collection('images')

        //writing the post on the firebase data
        //whenver progress changes, get snap shot of the upload in time
        storageRef.put(post.pic).on('state_changed', (snap) =>{
            let percentage = (snap.bytesTransferred / snap.totalBytes) *100;
            setProgress(percentage);
        }, (err) =>{
            setError(err)
            //get url of the post uploaded
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