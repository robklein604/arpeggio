import React, {Component} from 'react';
import "./css/Mode.scss";

export default class Mode extends Component{

    constructor(props){
        super(props);
        this.state = {mode: "updown"}
    }

    cycle_mode = () => {
        switch(this.state.mode){
            case "up":
                this.setState({mode: "down"});
                this.props.set_mode("down");
                break;
            case "down":
                this.setState({mode: "updown"});
                this.props.set_mode("updown");
                break;
            case "updown":
                this.setState({mode: "up"});
                this.props.set_mode("up");
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


