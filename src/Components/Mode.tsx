import React, {Component} from 'react';
import "./css/Mode.scss";
import {Mode} from '../Interfaces';

interface IProps {
    setMode: Function;
}
  
interface IState {
    mode: Mode;
}

export default class ModeUI extends React.Component<IProps, IState>{

    constructor(props: IProps){
        super(props);
        this.state = {mode: Mode.UpDown}
    }

    cycle_mode = () => {
        switch(this.state.mode){
            case Mode.Up:
                this.setState({mode: Mode.Down});
                this.props.setMode(Mode.Down);
                break;
            case Mode.Down:
                this.setState({mode: Mode.UpDown});
                this.props.setMode(Mode.UpDown);
                break;
            case Mode.UpDown:
                this.setState({mode: Mode.Up});
                this.props.setMode(Mode.Up);
                break;
        }
        
    }

    render(){
        return (
            <div className="Mode_Container">
                <p>Mode:</p> 
                <div 
                    onClick={this.cycle_mode} 
                    className={"mode " + this.state.mode}>
                    <img src={"/arpeggio/images/"+this.state.mode+".svg"}/> 
                </div>
            </div>
          );
    }
}


