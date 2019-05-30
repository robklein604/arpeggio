import React, {Component} from 'react';
import "./css/Play.scss";

export default class Play extends Component{

    constructor(props){
        super(props);
        this.state = {playing: false}
    }

    toggle_play = () => {
        this.setState({playing: !this.state.playing});
        //play a middle 'C' for the duration of an 8th note
        this.props.toggle_play_synth();
    }

    render(){
        return (
            <div onClick={this.toggle_play} className={this.state.playing?"Play Playing" : "Play Paused"}> {this.state.playing? "Pause" : "Play"} </div>
          );
    }
}


