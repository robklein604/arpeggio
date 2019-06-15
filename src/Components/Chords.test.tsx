import React from 'react';
import Enzyme, {shallow, render, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Chords from './Chords';
import {Chord} from '../Interfaces';

Enzyme.configure({ adapter: new Adapter() });

describe('Chords', () => {

    it('Chords should render divs with classes', () => {
        const wrapper = mount(<Chords activeNotes={[] as Array<number>} chords={[] as Array<Chord>} saveChord={{} as Function} loadChord={{} as Function} deleteChord={{} as React.MouseEventHandler} />);
        
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
    }

    it('Chord: when div is clicked it should call load_chord', () => {
    });

});