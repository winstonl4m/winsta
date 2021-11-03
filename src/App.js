import './App.css';
import Title from './components/Title';
import AddForm from './components/AddForm';
import ImageContainer from './components/ImageContainer';
import Modal from './components/Modal';
import React, { useState } from 'react';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);


  return (
    <div className="App">
      <Title/>
      <AddForm/>
      <ImageContainer setSelectedImg={setSelectedImg}/>
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
    </div>
  );
}

export default App;
