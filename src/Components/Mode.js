import React, {Component} from 'react';
import "./css/Mode.scss";

export default class Mode extends Component{

    constructor(props){
        super(props);
        this.state = {mode: "up"}
    }

    cycle_mode = () => {
        switch(this.state.mode){
            case "up":
                this.setState({mode: "down"});
                this.props.set_mode("down");
                break;
            case "down":
                this.setState({mode: "random"});
                this.props.set_mode("random");
                break;
            case "random":
                this.setState({mode: "all"});
                this.props.set_mode("all");
                break;
            case "all":
                this.setState({mode: "up"});
                this.props.set_mode("up");
                break;
        }
        
    }

    render(){
        return (
            <div className="Mode_Container"><span>Mode:</span> 
                <div 
                    onClick={this.cycle_mode} 
                    className={"mode " + this.state.mode}> {this.state.mode} 
                    <img src={"/images/"+this.state.mode+".svg"}/> 
                </div>
            </div>
          );
    }
}


