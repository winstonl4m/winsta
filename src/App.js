import './App.css';
import Title from './components/Title';
import AddForm from './components/AddForm';
import ImageContainer from './components/ImageContainer';
import Modal from './components/Modal';
import React, { useState } from 'react';
import { GrAddCircle } from 'react-icons/gr';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { AiOutlinePlus } from 'react-icons/ai';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Zen Antique', 'serif',
    ].join(','),
  },});


function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedAbout, setSelectedAbout] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const [addclick, setAddclick] = useState(false);

  const toggleForm = () =>{
    setAddclick(!addclick)
  }



  return (
    <ThemeProvider theme={theme}>
      <div className="App">
            <Title/>
            
                <button className="form_button" onClick={toggleForm}>
                <AiOutlinePlus size={40} />
                </button>            
            {addclick && <AddForm/>}
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
