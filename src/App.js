import React from 'react';
import './App.css';
import Synthy from './Components/Synthy';
import Audio_Manager from './Audio.js';
import Tone from 'tone';

function App() {
  const Audio = new Audio_Manager(Tone);
  return (
    <div className="App">
      <Synthy Audio_Manager = {Audio}/>
    </div>
  );
}

export default App;
