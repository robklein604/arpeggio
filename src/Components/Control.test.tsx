import React from 'react';
import Enzyme, {shallow, render, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Control from './Control';
Enzyme.configure({ adapter: new Adapter() });

describe('Control', () => {

    it('Control should render a .Control ', () => {
        const wrapper = shallow(<Control name={'reverb'} default={0} min={0} max={0} units={'hz'} func={()=>{}}/>);
        console.log(wrapper.debug());
        expect(wrapper.find('.Control').length).toBe(1);
    });

})