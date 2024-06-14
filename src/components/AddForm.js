import React,{useState} from 'react'
import ProgressBar from './ProgressBar';
import '../components/AddForm.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



function AddForm({showAddForm, setShowAddForm}) {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const [about, setAbout] = useState('');

    const [isImage, setIsImage] = useState(false);

    const [msg, setMsg] = useState('');

    const [clicked, setClicked] = useState(false);

    //toggle if we clicked into the plus to submit a post
    const [modalForm, setModalForm] = useState(showAddForm)
    
    
    //post is created when file is valid and submit button is clicked to set the msg
    let post = {
        pic: file,
        msg: msg,
    }

    const handleChange = (event) =>{
        let selected = event.target.files[0];


        //sets file if file is valid
        if (selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
            
            setIsImage(false);
            
            
        } else{
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        
        }
    }

    
    const handleSubmit = (event) => {
        event.preventDefault();
        //if description is empty, set msg to " " so there is a blank space in the description for the modal
        // otherwise set the msg to description
        if (about === ""){
            setMsg(' ');
        }else{
            setMsg(about);
        }
        
        //toggle image for progress bar
        setIsImage(true);
        setAbout('');
        

    }

    // sets the description
    const updateAbout = (event) =>{  
        setAbout(event.target.value);    
    }

    // if you clicked into the description box to enter a description
    const updateClick = () => {
        setClicked(true);
    }


    const handleClick = (event) =>{
        if(event.target.classList.contains('backdrop_form')){
            console.log("before " + modalForm);
            setModalForm(!modalForm)
            console.log("after " + modalForm);


        }
    }

    const handleClose = (event) =>{

            console.log("before " + modalForm);
            setModalForm(!modalForm)
            console.log("after " + modalForm);


        
    }

    //onClick ={handleClick}
    //<button onClick ={handleClose}>Close</button>
    //<div className = "backdrop_form" >

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
                                    
                                    multiline 
                                    fullWidth
                                    rows={5} 
                                    id="outline-multiline-static" 
                                    label="Please enter a description:"
                                    variant="standard"
                                    
                                    value = {about}
                                    onChange= {updateAbout}
                                    onClick={updateClick}
                                    />
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
