import React from 'react';
import Enzyme, {shallow, render, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Arpeggio from './Arpeggio';
Enzyme.configure({ adapter: new Adapter() });

describe('Arpeggio', () => {

    it('Arpeggio should render a .Arpeggio ', () => {
        const wrapper = shallow(<Arpeggio />);
        console.log(wrapper.debug());
        expect(wrapper.find('.Arpeggio').length).toBe(1);
    });

    
})