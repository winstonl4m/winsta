import React, {useEffect} from 'react'
import useStorage from '../hooks/useStorage'

const ProgressBar = ({file, setFile, post}) => {
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
