import React, {Component} from 'react';
import Key from './Key';
import {KeyType} from '../Interfaces';

interface IProps {
    activeNotes: Array<number>;
    range: number;
    addNote: Function;
    removeNote: Function;
}

interface IState {
    
}

export default class Octave extends React.Component<IProps, IState>{
    render(){
        return (
            <div className="Octave">
                <Key type={KeyType.White} active={this.props.activeNotes.includes(this.props.range*12 + 0)} noteNumber={this.props.range*12 + 0} addNote={this.props.addNote} removeNote={this.props.removeNote}/>
                <Key type={KeyType.Black} active={this.props.activeNotes.includes(this.props.range*12 + 1)} noteNumber={this.props.range*12 + 1} addNote={this.props.addNote} removeNote={this.props.removeNote}/>
                <Key type={KeyType.White} active={this.props.activeNotes.includes(this.props.range*12 + 2)} noteNumber={this.props.range*12 + 2} addNote={this.props.addNote} removeNote={this.props.removeNote}/>
                <Key type={KeyType.Black} active={this.props.activeNotes.includes(this.props.range*12 + 3)} noteNumber={this.props.range*12 + 3} addNote={this.props.addNote} removeNote={this.props.removeNote}/>
                <Key type={KeyType.White} active={this.props.activeNotes.includes(this.props.range*12 + 4)} noteNumber={this.props.range*12 + 4} addNote={this.props.addNote} removeNote={this.props.removeNote}/>
                <Key type={KeyType.White} active={this.props.activeNotes.includes(this.props.range*12 + 5)} noteNumber={this.props.range*12 + 5} addNote={this.props.addNote} removeNote={this.props.removeNote}/>
                <Key type={KeyType.Black} active={this.props.activeNotes.includes(this.props.range*12 + 6)} noteNumber={this.props.range*12 + 6} addNote={this.props.addNote} removeNote={this.props.removeNote}/>
                <Key type={KeyType.White} active={this.props.activeNotes.includes(this.props.range*12 + 7)} noteNumber={this.props.range*12 + 7} addNote={this.props.addNote} removeNote={this.props.removeNote}/>
                <Key type={KeyType.Black} active={this.props.activeNotes.includes(this.props.range*12 + 8)} noteNumber={this.props.range*12 + 8} addNote={this.props.addNote} removeNote={this.props.removeNote}/>
                <Key type={KeyType.White} active={this.props.activeNotes.includes(this.props.range*12 + 9)} noteNumber={this.props.range*12 + 9} addNote={this.props.addNote} removeNote={this.props.removeNote}/>
                <Key type={KeyType.Black} active={this.props.activeNotes.includes(this.props.range*12 + 10)} noteNumber={this.props.range*12 + 10} addNote={this.props.addNote} removeNote={this.props.removeNote}/>
                <Key type={KeyType.White} active={this.props.activeNotes.includes(this.props.range*12 + 11)} noteNumber={this.props.range*12 + 11} addNote={this.props.addNote} removeNote={this.props.removeNote}/>
            </div>
          );
    }
}