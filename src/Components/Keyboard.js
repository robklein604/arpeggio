import React, {Component} from 'react';
import './css/Keyboard.scss';

export default class Keyboard extends Component{
    render(){
        return (
            <div className="Keyboard">
                <Octave {...this.props} range={2}/>
                <Octave {...this.props} range={3}/>
                <Octave {...this.props} range={4}/>
                <Octave {...this.props} range={5}/>
                <Octave {...this.props} range={6}/>
            </div>
          );
    }
}

class Octave extends Component{
    render(){
        return (
            <div className="Octave">
                <Key type="White" active={this.props.active_notes.includes(this.props.range*12 + 0)} note_number={this.props.range*12 + 0} add_note={this.props.add_note} remove_note={this.props.remove_note}/>
                <Key type="Black" active={this.props.active_notes.includes(this.props.range*12 + 1)} note_number={this.props.range*12 + 1} add_note={this.props.add_note} remove_note={this.props.remove_note}/>
                <Key type="White" active={this.props.active_notes.includes(this.props.range*12 + 2)} note_number={this.props.range*12 + 2} add_note={this.props.add_note} remove_note={this.props.remove_note}/>
                <Key type="Black" active={this.props.active_notes.includes(this.props.range*12 + 3)} note_number={this.props.range*12 + 3} add_note={this.props.add_note} remove_note={this.props.remove_note}/>
                <Key type="White" active={this.props.active_notes.includes(this.props.range*12 + 4)} note_number={this.props.range*12 + 4} add_note={this.props.add_note} remove_note={this.props.remove_note}/>
                <Key type="White" active={this.props.active_notes.includes(this.props.range*12 + 5)} note_number={this.props.range*12 + 5} add_note={this.props.add_note} remove_note={this.props.remove_note}/>
                <Key type="Black" active={this.props.active_notes.includes(this.props.range*12 + 6)} note_number={this.props.range*12 + 6} add_note={this.props.add_note} remove_note={this.props.remove_note}/>
                <Key type="White" active={this.props.active_notes.includes(this.props.range*12 + 7)} note_number={this.props.range*12 + 7} add_note={this.props.add_note} remove_note={this.props.remove_note}/>
                <Key type="Black" active={this.props.active_notes.includes(this.props.range*12 + 8)} note_number={this.props.range*12 + 8} add_note={this.props.add_note} remove_note={this.props.remove_note}/>
                <Key type="White" active={this.props.active_notes.includes(this.props.range*12 + 9)} note_number={this.props.range*12 + 9} add_note={this.props.add_note} remove_note={this.props.remove_note}/>
                <Key type="Black" active={this.props.active_notes.includes(this.props.range*12 + 10)} note_number={this.props.range*12 + 10} add_note={this.props.add_note} remove_note={this.props.remove_note}/>
                <Key type="White" active={this.props.active_notes.includes(this.props.range*12 + 11)} note_number={this.props.range*12 + 11} add_note={this.props.add_note} remove_note={this.props.remove_note}/>
            </div>
          );
    }
}

class Key extends Component{

    toggle_active = () => {
        this.props.active? this.props.remove_note(this.props.note_number) : this.props.add_note(this.props.note_number);
    }

    render(){
        return (
            <div onClick={this.toggle_active} className={(this.props.active? "active ": "") + this.props.type + " Key " + this.props.note_number}>
            </div>
          );
    }
}

export {Key, Octave};