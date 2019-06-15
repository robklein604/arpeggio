import React, {Component} from 'react';
import './css/Control.scss';
import Draggable, { DraggableBounds, DraggableEvent, DraggableData } from 'react-draggable'; // The default

interface IProps {
    name: string;
    default: number;
    min: number;
    max: number;
    units: string;
    func: Function;
}
  
interface IState {
    value: number
}

export default class Control extends React.Component<IProps, IState>{

    constructor(props: IProps) {
        super(props);
        this.state = {
            value: this.props.default
        }
    }

    On_Drag = (e: DraggableEvent, ui: DraggableData) => {
        const pc = 100 - (ui.y / 1.5);
        const val = Math.round(this.props.min + (pc / 100 * (this.props.max - this.props.min)) );
        this.setState({value: val});
        if(this.props.func) this.props.func(val);
    }

    render(){
        return (
            <div className="Control">
                <div className="Name">{this.props.name}</div>
                <div className="Value">{this.state.value} <span className="Units">{this.props.units}</span> </div>
                <div className="Axis">
                    <Draggable onDrag={this.On_Drag} bounds={{top:0, bottom: 150 } as DraggableBounds} defaultPosition={{x:0, y: ( 150 - Math.round(this.props.default / this.props.max * 150)) }} axis="y">
                        <div className="Bar"></div>
                    </Draggable>
                </div>
            </div>
          );
    }
}


