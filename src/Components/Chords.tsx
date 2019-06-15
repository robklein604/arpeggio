import React, {Component} from 'react';
import "./css/Chords.scss";
import {Chord} from '../Interfaces';
import { noteNumberToString } from '../Static';

interface IProps {
    activeNotes: Array<number>;
    chords: Array<Chord>;
    saveChord: Function;
    loadChord: Function;
    deleteChord: React.MouseEventHandler;
}
  
interface IState {
    value: string
}

export default class Chords extends React.Component<IProps, IState>{

    constructor(props: IProps){
        super(props);
        this.state = {value: ''};
    }

    onTextInputChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
        this.setState({value: e.target.value});
    }

    addChord = () => {
        let name: string = this.state.value;
        if(name == "") name = this.props.activeNotes.map((n: number)=>{return noteNumberToString(n)}).toString();
        this.props.saveChord(name + " ");
    }

    render(){

        const chords_list = this.props.chords.map((c,i)=>{
            return (<ChordUI key={i} loadChord={this.props.loadChord} chord={c}/>);
        });

        return (
            <div className="Chords">
                <span>Chords:</span>
                <input type="text" value={this.state.value} onChange={this.onTextInputChange}></input>
                
                <div onClick={this.addChord} className="add_button">add</div>
                
                <div onClick={this.props.deleteChord} className="delete_button">delete</div>
                
                <div className="chord_container">
                    {chords_list}
                </div>
            </div>
          );
    }
}

interface IPropsChordUI {
    loadChord: Function;
    chord: Chord;
}
  
interface IStateChordUI {
}

class ChordUI extends React.Component<IPropsChordUI, IStateChordUI>{
    render (){
        return(
            <div onClick = {()=>this.props.loadChord(this.props.chord.notes)} className="chord">{this.props.chord.name}</div>
        );
    }
}
