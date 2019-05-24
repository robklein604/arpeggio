import React, {Component} from 'react';
import "./css/Play.css";
import {toggle_play_synth} from './Audio.js';

export default class Play extends Component{

    constructor(props){
        super(props);
        this.state = {Playing: false}
    }

    togglePlay = () => {
        this.setState({Playing: !this.state.Playing});
        //play a middle 'C' for the duration of an 8th note
        toggle_play_synth();
    }

    render(){
        return (
            <div onClick={this.togglePlay} className={this.state.Playing?"Play Playing" : "Play Paused"}> {this.state.Playing? "Pause" : "Play"} </div>
          );
    }
}


