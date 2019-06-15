import React, {Component} from 'react';
import './css/Keyboard.scss';
import Octave from './Octave';

interface IKeyboardProps {
    activeNotes: Array<number>;
    addNote: Function;
    removeNote: Function;
}
  
interface IKeyboardState {
    playing: boolean
}

export default class Keyboard extends React.Component<IKeyboardProps, IKeyboardState>{
    render(){
        return (
            <div className="Keyboard">
                <Octave {...this.props} range={2}/>
                <Octave {...this.props} range={3}/>
                <Octave {...this.props} range={4}/>
                <Octave {...this.props} range={5}/>
                <Octave {...this.props} range={6}/>
            </div>
        );
    }
}




