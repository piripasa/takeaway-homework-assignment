import React from 'react';
import {describe, expect, it} from "@jest/globals";
import {shallow, mount} from './setupTests';
import SortTypeButton from "../components/Restaurant/Content/Header/SortTypeButton";

describe("SortTypeButton", () => {
    it('should render component', () => {
        const wrapper = shallow(<SortTypeButton currentState={{sortType:'asc'}}/>);
        expect(wrapper.find('button')).toBeDefined();
    });

    it('allows us to set props', () => {
        const wrapper = mount(<SortTypeButton currentState={{sortType:'asc'}}/>);
        wrapper.setProps({bar: 'foo'});
        expect(wrapper.props().bar).toEqual('foo');
    });

    it('simulates click events', () => {
        const mockCallBack = jest.fn().mockReturnValue('asc');
        const wrapper = shallow(<SortTypeButton currentState={{sortType:'asc'}} onListSorting={mockCallBack}/>);

        wrapper.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
        expect(mockCallBack.mock.results[0].value).toEqual('asc');
    });
});
