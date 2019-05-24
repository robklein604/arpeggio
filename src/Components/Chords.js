import React, {Component} from 'react';
import "./css/Chords.css";
import {note_number_to_string} from './Audio.js';



export default class Chords extends Component{

    constructor(props){
        super(props);
        this.state = {value: ''};
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
      }

    render(){

        const chords_list = this.props.chords.map(c=>{
            return (<Chord load_chord={this.props.load_chord} chord={c}/>);
        });

        return (
            <div className="Chords">
                <span>Chords:</span>
                <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                <div onClick={()=>this.props.save_chord(this.state.value + " " + this.props.active_notes.map(n=>{return note_number_to_string(n)}))} className="add_button">add</div>
                <div onClick={this.props.delete_chord} className="delete_button">delete</div>
                <div className="chord_container">
                    {chords_list}
                </div>
            </div>
          );
    }
}

class Chord extends Component{
    render (){
        return(
            <div onClick = {()=>this.props.load_chord(this.props.chord.notes)} className="chord">{this.props.chord.name}</div>
        );
    }
}
