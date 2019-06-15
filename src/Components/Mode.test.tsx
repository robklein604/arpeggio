import React from 'react';
import Enzyme, {shallow, render, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Mode from './Mode';
Enzyme.configure({ adapter: new Adapter() });

describe('Mode', () => {

    it('should render two divs and an img', () => {
        const wrapper = mount(<Mode setMode={()=>{}}/>);
        expect(wrapper.find('div').length).toBe(2);
        expect(wrapper.find('img').length).toBe(1);
    });

    it('should render .Mode_Container and mode', () => {
        const wrapper = mount(<Mode setMode={()=>{}}/>);
        expect(wrapper.find('.Mode_Container').length).toBe(1);
        expect(wrapper.find('.mode').length).toBe(1);
    });

    it('should call props.set_mode when clicked', () => {
        const mock = jest.fn();
        const wrapper = mount(<Mode setMode={mock}/>);
        wrapper.find('.mode').simulate('click');
        expect(mock.mock.calls.length).toBe(1);
    });

})