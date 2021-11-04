import React,{useState} from 'react'
import ProgressBar from './ProgressBar';
import '../components/AddForm.css';
import TextField from '@mui/material/TextField';
import { GrAddCircle } from 'react-icons/gr';
import Button from '@mui/material/Button';


function AddForm() {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const [about, setAbout] = useState('');

    const [isImage, setIsImage] = useState(false);

    let post = {
        pic: file,
        msg: about,
    }
    
    const handleChange = (event) =>{
        let selected = event.target.files[0];

        if (selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
            console.log(isImage);
            setIsImage(false);
            
            
        } else{
            setFile(null);
            setError('Please select an image file png or jpeg');
        
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();


        console.log(post);
        setIsImage(true);
        setAbout('');
        console.log(about);
        console.log(isImage);
        console.log(file);

    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label>
                <input type="file" onChange={handleChange}/>
                <GrAddCircle/>
            </label>
            <TextField 
                    multiline 
                    fullWidth
                    rows={4} 
                    id="standard-multiline-static" 
                    helperText="Please enter an optional description" 
                    label="Description"
                    variant="standard"
                    value = {about}
                    onChange= {(event) => setAbout(event.target.value)}/>
            
            <div className="output" >
                {error && <div className="error">{error}</div>}
                {file && <div>{ file.name}</div>}
                {file && isImage && <ProgressBar file={file} setFile={setFile} post={post} /> }
            </div>
            <Button type="submit" variant="contained">Post Picture</Button>
        </form>
    )
}

export default AddForm;
