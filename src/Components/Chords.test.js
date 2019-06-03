import React from 'react';
import Enzyme, {shallow, render, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Chords, {Key} from './Chords';
Enzyme.configure({ adapter: new Adapter() });

describe('Chords', () => {

    it('Chords should render divs with classes', () => {
        const wrapper = mount(<Keyboard active_notes={[]}/>);
        expect(wrapper.find('.Chords').length).toBe(1);
        expect(wrapper.find('.add_button').length).toBe(1);
        expect(wrapper.find('.delete_button').length).toBe(1);
        expect(wrapper.find('.chord_container').length).toBe(1);
    });

    it('div onClick should call props.save_chords') ,() => {

    }

    it('div onClick should call props.delete_chord') ,() => {
        
    }

    it('Chords should load chords from this.props.chords') ,() => {
        const chords = [
            {name:"Chord1",
            notes:[23,43,54]},
            {name:"Chord2",
            notes:[23,43,54]},
            {name:"Chord3",
            notes:[23,43,54]},
        ];
        const wrapper = mount(<Keyboard chords={chords}/>);
    }

    it('Chord: when div is clicked it should call load_chord', () => {
        
    });

})