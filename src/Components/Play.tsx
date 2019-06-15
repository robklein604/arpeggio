import * as React from 'react';
import "./css/Play.scss";

interface IProps {
    togglePlaySynth: Function
}

interface IState {
    playing: boolean
}

export default class Play extends React.Component<IProps, IState>{

    constructor(props: IProps){
        super(props);
        this.state = {playing: false}
    }

    toggle_play = () => {
        this.setState({playing: !this.state.playing});
        //play a middle 'C' for the duration of an 8th note
        this.props.togglePlaySynth();
    }

    render(){

        return (
            <div 
                onClick={this.toggle_play} 
                className={"Play " + (this.state.playing?"Playing" : "Paused")}> 
                
            </div>
          );
    }
}


