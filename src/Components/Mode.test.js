import React from 'react';
import Enzyme, {shallow, render, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Mode from './Mode';
Enzyme.configure({ adapter: new Adapter() });

describe('Mode', () => {

    it('should render two divs and an img', () => {
        expect(mount(<Mode />).find('div').length).toBe(2);
        expect(mount(<Mode />).find('img').length).toBe(1);
    });

    it('should render .Mode_Container and mode', () => {
        expect(mount(<Mode />).find('.Mode_Container').length).toBe(1);
        expect(mount(<Mode />).find('.mode').length).toBe(1);
    });

    it('should call props.set_mode when clicked', () => {
        const mock = jest.fn();
        const wrapper = mount(<Mode set_mode={mock}/>);
        wrapper.find('.mode').simulate('click');
        expect(mock.mock.calls.length).toBe(1);
    });

})