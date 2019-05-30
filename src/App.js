import React from 'react';
import './App.css';
import Synthy from './Components/Synthy';
import Audio_Manager from './Audio.js';

function App() {
  return (
    <div className="App">
      <Synthy Audio_Manager = {Audio_Manager}/>
    </div>
  );
}

export default App;
