import React, {useEffect} from 'react'
import useStorage from '../hooks/useStorage'

const ProgressBar = ({file, setFile}) => {
    const {url, progress} = useStorage(file);
    console.log(progress, url);

    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile])



    return (
        <div className="progress_bar"
            >{progress}
            
        </div>
    )
}

export default ProgressBar
