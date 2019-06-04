import React, {Component} from 'react';
import "./css/Chords.scss";

export default class Chords extends Component{

    constructor(props){
        super(props);
        this.state = {value: ''};
    }

    text_input_change = (event) => {
        this.setState({value: event.target.value});
    }

    add_chord = () => {
        let name = this.state.value;
        if(name == "") name = this.props.active_notes.map(n=>{return                            this.props.note_number_to_string(n)});
        this.props.save_chord(name + " ");
    }

    render(){

        const chords_list = this.props.chords.map((c,i)=>{
            return (<Chord key={i} load_chord={this.props.load_chord} chord={c}/>);
        });

        return (
            <div className="Chords">
                <span>Chords:</span>
                <input type="text" value={this.state.value} onChange={this.text_input_change}></input>
                
                <div onClick={this.add_chord} className="add_button">add</div>
                
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
