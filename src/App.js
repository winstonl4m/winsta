import './App.css';
import Title from './components/Title';
import AddForm from './components/AddForm';
import ImageContainer from './components/ImageContainer';
import Modal from './components/Modal';
import React, { useState } from 'react';
import { GrAddCircle } from 'react-icons/gr';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Zen Antique', 'serif',
    ].join(','),
  },});


function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedAbout, setSelectedAbout] = useState(null);

  const [addclick, setAddclick] = useState(false);

  const toggleForm = () =>{
    setAddclick(!addclick)
  }



  return (
    <ThemeProvider theme={theme}>
      <div className="App">
            <Title/>
            <label>
                <button onClick={toggleForm}/>
                <GrAddCircle size={40} />
            </label> 
            {addclick && <AddForm/>}
            <ImageContainer setSelectedImg={setSelectedImg} setSelectedAbout={setSelectedAbout}  />
            { selectedImg && selectedAbout &&
              <Modal 
                selectedImg={selectedImg} 
                setSelectedImg={setSelectedImg}
                selectedAbout={selectedAbout}
                setSelectedAbout={setSelectedAbout} />}
          </div>
    </ThemeProvider>
    
  );
}

export default App;
