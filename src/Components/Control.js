import React, {Component} from 'react';
import './css/Control.css';
import Draggable from 'react-draggable'; // The default

export default class Control extends Component{

    constructor(props){
        super(props);
        this.state = {
            Value: this.props.default
        }
    }

    On_Drag = (e, ui) =>{
        const pc = 100 - (ui.y / 1.9);
        const val = Math.round(this.props.min + (pc / 100 * (this.props.max - this.props.min)) );
        this.setState({Value: val});
        if(this.props.func) this.props.func(val);
    }

    render(){
        return (
            <div className="Control">
                <div className="Name">{this.props.type}</div>
                <div className="Value">{this.state.Value} <span className="Units">{this.props.units}</span> </div>
                <div className="Axis">
                    <Draggable onDrag={this.On_Drag} bounds={{top:0, bottom: 190 }} defaultPosition={{x:0, y: ( 190 - Math.round(this.props.default / this.props.max * 190)) }} axis="y">
                        <div className="Bar"></div>
                    </Draggable>
                </div>
            </div>
          );
    }
}


