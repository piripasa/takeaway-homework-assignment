import React from 'react';
import {describe, expect, it} from "@jest/globals";
import {shallow, mount} from './setupTests';
import SortTypeButton from "../components/Restaurant/Content/SortTypeButton";

describe("SortTypeButton", () => {
    it('should render component', () => {
        const wrapper = shallow(<SortTypeButton/>);
        expect(wrapper.find('button')).toBeDefined();
    });

    it('allows us to set props', () => {
        const wrapper = mount(<SortTypeButton/>);
        wrapper.setProps({bar: 'foo'});
        expect(wrapper.props().bar).toEqual('foo');
    });

    it('simulates click events', () => {
        const mockCallBack = jest.fn().mockReturnValue('asc');
        const wrapper = shallow(<SortTypeButton onListSorting={mockCallBack}/>);

        wrapper.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
        expect(mockCallBack.mock.results[0].value).toEqual('asc');
    });
});
