import React, {Component} from 'react';
import Play from './Play';
import Mode from './Mode';
import Keyboard from './Keyboard';
import Control from './Control';
import Chords from './Chords';
import './css/Arpeggio.scss';
import Audio_Manager from '../Audio';
import {Chord} from '../Interfaces';

interface IProps {
    Audio_Manager: Audio_Manager,
}
  
interface IState {
    activeNotes: Array<number>,
    chords: Array<Chord>,
}

export default class Arpeggio extends React.Component<IProps, IState>{

    constructor(props: IProps){
        super(props);
        this.state={
            activeNotes:[],
            chords:[
                {name: "C min", notes: [36, 39, 43, 48, 51]},
                {name: "Bb maj", notes: [34, 38, 41, 46, 50]},
                {name: "G maj", notes: [32, 36, 39, 44, 48]},
            ]
        }
    }

    componentDidMount(){
        
    }

    addNote = (note: number) => {
        let notes = this.state.activeNotes;
        notes.push(note);
        notes.sort();
        this.setState({
            activeNotes: notes
        });
        this.props.Audio_Manager.setNotes(notes);
    }
    
    removeNote = (note: number) => {
        let notes = this.state.activeNotes.filter(n => n!=note);
        this.setState({
            activeNotes: notes
        });
        this.props.Audio_Manager.setNotes(notes);
    }

    saveChord = (name: string) => {
        let chords = [...this.state.chords];
        chords.push({
            name: name,
            notes: [...this.state.activeNotes]
        });
        this.setState({
            chords: chords
        });
    }

    loadChord = (notes: Array<number>) => {
        this.setState({
            activeNotes: [...notes]
        });
        this.props.Audio_Manager.setNotes(notes);
    }

    deleteChord = () => {
        let chords = this.state.chords;
        chords.pop();
        this.setState({
            chords: chords
        }); //redundant
    }

    render(){
        
        return (
            <div className="Arpeggio">
                
                <div className="Header">
                    <img className="Logo" src="/arpeggio/images/keyboard.svg"/>
                    <Play togglePlaySynth={this.props.Audio_Manager.togglePlaySynth}/>
                    <Mode setMode={this.props.Audio_Manager.setMode}/>
                </div>

                <div className="Content">
                    <Keyboard 
                        activeNotes={this.state.activeNotes} 
                        addNote={this.addNote} 
                        removeNote={this.removeNote}/>
                    
                    <Chords 
                        activeNotes={this.state.activeNotes}
                        chords={this.state.chords}
                        saveChord={this.saveChord}
                        loadChord={this.loadChord}
                        deleteChord={this.deleteChord}
                    />
                    <div className="Control_Bar">
                        <Control name="Speed" default={160} min={20} max={200} units="bpm" func={this.props.Audio_Manager.setBpm}/>
                        <Control name="Decay" default={750} min={50} max={5000} units="ms" func={this.props.Audio_Manager.setDecay}/>
                        <Control name="Tone" default={1500} min={10} max={2000} units="hz" func={this.props.Audio_Manager.set_cutoff} />
                    </div>
                </div>
                
            </div>
        );
    }
}


