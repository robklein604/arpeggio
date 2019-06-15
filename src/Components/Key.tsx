import React, {Component} from 'react';
import {KeyType} from '../Interfaces';

interface IProps {
    active: boolean;
    addNote: Function;
    removeNote: Function;
    noteNumber: number;
    type: KeyType;
}

interface IState {
    
}

export default class Key extends React.Component<IProps, IState>{

    toggleActive = () => {
        this.props.active? this.props.removeNote(this.props.noteNumber) : this.props.addNote(this.props.noteNumber);
    }

    render(){
        return (
            <div onClick={this.toggleActive} className={(this.props.active? "active ": "") + this.props.type + " Key " + this.props.noteNumber}>
            </div>
          );
    }
}