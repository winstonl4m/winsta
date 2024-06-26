import './App.css';
import Title from './components/Title';
import AddForm from './components/AddForm';
import ImageContainer from './components/ImageContainer';
import Modal from './components/Modal';
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { AiOutlinePlus } from 'react-icons/ai';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Zen Antique', 'serif',
    ].join(','),
  },});


function App() {

  //states for the modal
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedAbout, setSelectedAbout] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const [addclick, setAddclick] = useState(false);

  const [showAddForm, setShowAddForm] = useState(false)


  //toggle AddForm if plus button is clicked
  const toggleForm = () =>{
    console.log("click?before " + addclick);
    setAddclick(!addclick)
    setShowAddForm(!showAddForm)
    console.log("click?after " + addclick);
  }



  return (
    <ThemeProvider theme={theme}>
      <div className="App">
            <Title/>
            
                <button className="form_button" onClick={toggleForm}>
                <AiOutlinePlus size={40} />
                </button>            
            
            <div className="backdrop_addform">
              {addclick && <AddForm showAddForm ={showAddForm} setShowAddForm={setShowAddForm}/>}
            </div>
            
            <ImageContainer setSelectedImg={setSelectedImg} setSelectedAbout={setSelectedAbout} setSelectedTime={setSelectedTime} />
            { selectedImg && selectedAbout && selectedTime &&
              <Modal 
                selectedImg={selectedImg} 
                setSelectedImg={setSelectedImg}
                selectedAbout={selectedAbout}
                setSelectedAbout={setSelectedAbout}
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
                 />}
          </div>
    </ThemeProvider>
    
  );
}

export default App;
