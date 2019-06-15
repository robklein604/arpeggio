import React from 'react';
import Enzyme, {shallow, render, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Arpeggio from './Arpeggio';
Enzyme.configure({ adapter: new Adapter() });

import Audio_Manager from '../Audio';
import Tone from 'tone';
jest.mock('tone');
jest.mock('../Audio');

describe('Arpeggio', () => {

    it('Arpeggio should render a .Arpeggio ', () => {
        const AM = new Audio_Manager(Tone);
        const wrapper = shallow(<Arpeggio Audio_Manager={AM}/>);
        console.log(wrapper.debug());
        expect(wrapper.find('.Arpeggio').length).toBe(1);
    });

    
})