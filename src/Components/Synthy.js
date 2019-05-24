import React, {Component} from 'react';
import Play from './Play';
import Mode from './Mode';
import Keyboard from './Keyboard';
import Control from './Control';
import Chords from './Chords';
import {setBpm, setDecay, setDelay, setReverb, set_active_notes} from './Audio';
import './css/Synthy.css';

export default class Synth extends Component{

    constructor(props){
        super(props);
        this.state={
            active_notes:[],
            chords:[]
        }
    }

    componentDidMount(){
        
    }

    add_note = (note) => {
        let notes = this.state.active_notes;
        notes.push(note);
        notes.sort();
        this.setState({
            active_notes: notes
        });
        set_active_notes(notes);
    }
    
    remove_note = (note) => {
        let notes = this.state.active_notes.filter(n => n!=note);
        this.setState({
            active_notes: notes
        });
        set_active_notes(notes);
    }

    save_chord = (name) => {
        let chords = [...this.state.chords];
        chords.push({
            name: name,
            notes: [...this.state.active_notes]
        });
        this.setState({
            chords: chords
        });
    }

    load_chord = (notes) => {
        this.setState({
            active_notes: [...notes]
        });
        set_active_notes(notes);
    }

    delete_chord = () => {
        let chords = this.state.chords;
        chords.pop();
        this.setState({
            chords: chords
        });
    }

    render(){
        return (
            <div className="Synthy">
                <h1>ARPEGGIO</h1>
                <Play/>
                <Mode/>
                <Keyboard active_notes={this.state.active_notes} add_note={this.add_note} remove_note={this.remove_note}/>
                <Chords active_notes={this.state.active_notes} chords={this.state.chords} save_chord={this.save_chord} load_chord={this.load_chord} delete_chord={this.delete_chord}/>
                <div className="Control_Bar">
                    
                    <Control type="Speed" default={180} min={20} max={200} units="bpm" func={setBpm}/>
                    <Control type="Decay" default={2500} min={50} max={5000} units="ms" func={setDecay}/>
                    <Control type="Tone" default={100} min={10} max={2000} units="hz" />
                    <Control type="Delay" default={0} min={0} max={100} units="%" func={setDelay}/>
                    <Control type="Space" default={0} min={0} max={100} units="%" func={setReverb}/>
                </div>
            </div>
        );
    }
}


