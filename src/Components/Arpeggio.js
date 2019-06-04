import React, {Component} from 'react';
import Play from './Play';
import Mode from './Mode';
import Keyboard from './Keyboard';
import Control from './Control';
import Chords from './Chords';
import './css/Arpeggio.scss';

export default class Arpeggio extends Component {

    constructor(props){
        super(props);
        this.state={
            active_notes:[],
            chords:[
                {name: "C min", notes: [36, 39, 43, 48, 51]},
                {name: "Bb maj", notes: [34, 38, 41, 46, 50]},
                {name: "G maj", notes: [32, 36, 39, 44, 48]},
                // {name: "Cmin", notes: []},
                // {name: "Cmin", notes: []},
            ]
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
        this.props.Audio_Manager.set_active_notes(notes);
    }
    
    remove_note = (note) => {
        let notes = this.state.active_notes.filter(n => n!=note);
        this.setState({
            active_notes: notes
        });
        this.props.Audio_Manager.set_active_notes(notes);
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
        this.props.Audio_Manager.set_active_notes(notes);
    }

    delete_chord = () => {
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
                    <img className="Logo" src="/images/keyboard.svg"/>
                    <Play toggle_play_synth={this.props.Audio_Manager.toggle_play_synth}/>
                    <Mode set_mode={this.props.Audio_Manager.set_mode}/>
                </div>

                <div className="Content">
                    <Keyboard active_notes={this.state.active_notes} add_note={this.add_note} remove_note={this.remove_note}/>
                    
                    <Chords 
                        active_notes={this.state.active_notes}
                        chords={this.state.chords}
                        save_chord={this.save_chord}
                        load_chord={this.load_chord}
                        delete_chord={this.delete_chord}
                        note_number_to_string={this.props.Audio_Manager.note_number_to_string}
                    />
                    <div className="Control_Bar">
                        <Control type="Speed" default={160} min={20} max={200} units="bpm" func={this.props.Audio_Manager.set_bpm}/>
                        <Control type="Decay" default={750} min={50} max={5000} units="ms" func={this.props.Audio_Manager.set_decay}/>
                        <Control type="Tone" default={1500} min={10} max={2000} units="hz" func={this.props.Audio_Manager.set_cutoff} />
                    </div>

                </div>
            </div>
        );
    }
}


