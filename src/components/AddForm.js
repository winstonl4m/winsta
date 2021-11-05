import React,{useState} from 'react'
import ProgressBar from './ProgressBar';
import '../components/AddForm.css';
import TextField from '@mui/material/TextField';
import { GrAddCircle } from 'react-icons/gr';
import Button from '@mui/material/Button';
import { ClassNames } from '@emotion/react';


function AddForm() {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const [about, setAbout] = useState('');

    const [isImage, setIsImage] = useState(false);

    const [msg, setMsg] = useState('');

    const [clicked, setClicked] = useState(false);
    
    

    let post = {
        pic: file,
        msg: msg,
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
            setError('Please select an image file (png or jpeg)');
        
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (about === ""){
            setMsg(' ');
        }else{
            setMsg(about);
        }
        console.log(post);
        setIsImage(true);
        setAbout('');
        console.log(about);
        console.log(isImage);
        console.log(file);

    }

    const updateAbout = (event) =>{
        console.log(about);
        setAbout(event.target.value);
        
    }

    const updateClick = () => {
        setClicked(true);
        console.log(clicked);
    }

    return (
        <div className="form_container">
            <form className="form" onSubmit={handleSubmit}>
                
                <Button style={{fontFamily: "Zen Antique", borderColor:"grey",color: "black", fontSize:"14px",}} variant="outlined" component="label">Upload Image
                    <input required type="file" onChange={handleChange} />
                </Button>
                
                <div className="description">
                <TextField 
                        InputLabelProps={{
                            style: {
                                color: "black",
                                fontSize: "15px",
                                textAlign: "center",
                                fontFamily: "Zen Antique",
                                
                            }}}
                        InputProps = {{
                            style: {
                                color: "black",
                                fontSize: "15px",
                                textAlign: "center",
                                fontFamily: "Zen Antique",
                                paddingTop: "20px",
                            }}}
                        //required
                        multiline 
                        fullWidth
                        rows={5} 
                        id="outline-multiline-static" 
                        label="Please enter a description:"
                        variant="standard"
                        
                        value = {about}
                        onChange= {updateAbout}
                        onClick={updateClick}/>
                </div>
                
                <div className="output" >
                    {error && <div className="error">{error}</div>}
                    {file && <div>{ file.name}</div>}
                    {file && isImage && <ProgressBar file={file} setFile={setFile} post={post} /> }
                </div>
                <Button  style={{fontFamily: "Zen Antique", borderColor:"grey",color: "black", fontSize:"14px"}} type="submit" variant="outlined">Post Picture</Button>
            </form>
        </div>
        
    )
}

export default AddForm;
