import React, {Component} from 'react';
import "./css/Mode.css";
import {setMode} from './Audio.js';



export default class Mode extends Component{

    constructor(props){
        super(props);
        this.state = {mode: "up"}
    }

    cycleMode = () => {
        switch(this.state.mode){
            case "up":
                this.setState({mode: "down"});
                setMode("down");
                break;
            case "down":
                this.setState({mode: "random"});
                setMode("random");
                break;
            case "random":
                this.setState({mode: "all"});
                setMode("all");
                break;
            case "all":
                this.setState({mode: "up"});
                setMode("up");
                break;
        }
        
    }

    render(){
        return (
            <div className="Mode_Container"><span>Mode:</span> 
                <div onClick={this.cycleMode} className={"mode " + this.state.mode}> {this.state.mode} <img src={"/images/"+this.state.mode+".svg"}/> </div>
            </div>
          );
    }
}


