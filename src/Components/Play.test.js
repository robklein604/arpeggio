import React from 'react';
import Enzyme, {shallow, render, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Play from './Play';
Enzyme.configure({ adapter: new Adapter() });

describe('Play', () => {

    it('should render a div', () => {
        expect(mount(<Play />).find('div').length).toBe(1);
    });

    it('should render a div with class Play', () => {
        expect(mount(<Play />).find('.Play').length).toBe(1);
    });

    it('should render a div with text Play', () => {
        expect(render(<Play />).text()).toBe("Play");
    });

    it('should call toggle_play_synth when clicked', () => {
        const mock = jest.fn();
        const wrapper = mount(<Play toggle_play_synth={mock}/>);
        wrapper.find('div').simulate('click');
        expect(mock.mock.calls.length).toBe(1);
    });

})