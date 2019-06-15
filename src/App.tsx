import React from 'react';
import './App.css';
import Arpeggio from './Components/Arpeggio';
import Audio_Manager from './Audio';
import Tone from 'tone';

function App() {
  const audio_manager = new Audio_Manager(Tone);
  return (
    <div className="App">
      <Arpeggio Audio_Manager = {audio_manager}/>
    </div>
  );
}

export default App;
