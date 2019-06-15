import React from 'react';
import Enzyme, {shallow, render, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Keyboard from './Keyboard';
import Key from './Key';
import { KeyType } from '../Interfaces';
Enzyme.configure({ adapter: new Adapter() });

describe('Keyboard', () => {
    
    it('Keyboard should render a .Keyboard and 5 .Octaves', () => {
        const addNoteMock = jest.fn();
        const removeNoteMock = jest.fn();
        expect(mount(<Keyboard activeNotes={[]} addNote={addNoteMock} removeNote={removeNoteMock}/>).find('.Keyboard').length).toBe(1);
        expect(mount(<Keyboard activeNotes={[]} addNote={addNoteMock} removeNote={removeNoteMock}/>).find('.Octave').length).toBe(5);
    });

    it('should call props.add_node and props.remove_note when clicked twice', () => {
        const addNoteMock = jest.fn();
        const removeNoteMock = jest.fn();
        const wrapper = mount(<Key active={false} noteNumber={24} addNote={addNoteMock} removeNote={removeNoteMock} type={KeyType.White}/>);
        wrapper.find('div').simulate('click');
        expect(addNoteMock.mock.calls.length).toBe(1);
    });

    it('should call props.add_node and props.remove_note when clicked twice', () => {
        const addNoteMock = jest.fn();
        const removeNoteMock = jest.fn();
        const wrapper = mount(<Key active={true} noteNumber={24} addNote={addNoteMock} removeNote={removeNoteMock} type={KeyType.White}/>);
        wrapper.find('div').simulate('click');
        expect(removeNoteMock.mock.calls.length).toBe(1);
    });

})