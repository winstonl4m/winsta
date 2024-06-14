import React, {useEffect} from 'react'
import useStorage from '../hooks/useStorage'


//progressbar is called when theres an jpeg/img to submit for firebase
const ProgressBar = ({file, setFile, post}) => {

    //calls useStorage to upload the post onto firebase
    // returns the url and progress of the post
    const {url, progress} = useStorage(post);
    

    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile])



    return (
        <div className="progress_bar"
            >{progress +"%"}
            
        </div>
    )
}

export default ProgressBar
