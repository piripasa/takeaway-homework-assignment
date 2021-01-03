import React from 'react';
import {describe, expect, it} from "@jest/globals";
import {shallow, mount} from './setupTests';
import SortListItem from "../components/Restaurant/Sidebar/SortListItem";

describe("SortListItem", () => {
    it('should render component', () => {
        const wrapper = shallow(<SortListItem options={{
            icon: 'fa-crosshairs',
            slug: 'bestMatch',
            text: 'Best Match'
        }}/>);
        expect(wrapper.find('li')).toBeDefined();
    });

    it('allows us to set props', () => {
        const wrapper = mount(<SortListItem options={{
            icon: 'fa-crosshairs',
            slug: 'bestMatch',
            text: 'Best Match'
        }}/>);
        expect(wrapper.props().options.slug).toEqual('bestMatch');
        wrapper.setProps({bar: 'foo'});
        expect(wrapper.props().bar).toEqual('foo');
    });

    it('simulates click events', () => {
        const mockCallBack = jest.fn().mockReturnValue('bestMatch');
        const wrapper = shallow(<SortListItem onSortingSelect={mockCallBack} options={{
            icon: 'fa-crosshairs',
            slug: 'bestMatch',
            text: 'Best Match'
        }}/>);

        wrapper.find('li').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
        expect(mockCallBack.mock.results[0].value).toEqual('bestMatch');
    });
});
