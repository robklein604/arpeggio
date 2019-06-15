import React from 'react';
import Enzyme, {shallow, render, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Play from './Play';
Enzyme.configure({ adapter: new Adapter() });

describe('Play', () => {
    const mock = jest.fn();

    it('should render a div', () => {
        expect(mount(<Play togglePlaySynth={mock}/>).find('div').length).toBe(1);
    });

    it('should render a div with class Play', () => {
        expect(mount(<Play togglePlaySynth={mock}/>).find('.Play').length).toBe(1);
    });

    it('should render a div with text Play', () => {
        expect(render(<Play togglePlaySynth={mock}/>).text()).toBe("Play");
    });

    it('should call toggle_play_synth when clicked', () => {
        const wrapper = mount(<Play togglePlaySynth={mock}/>);
        wrapper.find('div').simulate('click');
        expect(mock.mock.calls.length).toBe(1);
    });

})