import React from 'react';
import {describe, expect, it} from "@jest/globals";
import {shallow, mount} from './setupTests';
import NameFilter from "../components/Restaurant/Sidebar/NameFilter";

describe("NameFilter", () => {
    it('should render component', () => {
        const wrapper = shallow(<NameFilter/>);
        expect(wrapper.find('input')).toBeDefined();
    });

    it('allows us to set props', () => {
        const wrapper = mount(<NameFilter/>);
        wrapper.setProps({bar: 'foo'});
        expect(wrapper.props().bar).toEqual('foo');
    });

    it('simulates typing events', () => {
        const mockCallBack = jest.fn();
        const event = {
            target: {value: 'Tandoori'}
        };
        const wrapper = shallow(<NameFilter onNameTyping={mockCallBack}/>);

        wrapper.find('input').simulate('change', event);
        expect(mockCallBack.mock.calls.length).toEqual(1);
        expect(mockCallBack).toBeCalledWith('Tandoori');
    });
});
