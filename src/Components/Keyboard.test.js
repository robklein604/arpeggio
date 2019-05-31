import React from 'react';
import Enzyme, {shallow, render, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Keyboard, {Key} from './Keyboard';
Enzyme.configure({ adapter: new Adapter() });

describe('Keyboard', () => {

    it('Keyboard should render a .Keyboard and 5 .Octaves', () => {
        expect(mount(<Keyboard active_notes={[]}/>).find('.Keyboard').length).toBe(1);
        expect(mount(<Keyboard active_notes={[]} />).find('.Octave').length).toBe(5);
    });

    it('should call props.add_node and props.remove_note when clicked twice', () => {
        const mock_add_note = jest.fn();
        const wrapper = mount(<Key active={false} note_number={24} add_note={mock_add_note} />);
        wrapper.find('div').simulate('click');
        expect(mock_add_note.mock.calls.length).toBe(1);
    });

    it('should call props.add_node and props.remove_note when clicked twice', () => {
        const mock_remove_note = jest.fn();
        const wrapper = mount(<Key active={true} note_number={24} remove_note={mock_remove_note}/>);
        wrapper.find('div').simulate('click');
        expect(mock_remove_note.mock.calls.length).toBe(1);
    });

})