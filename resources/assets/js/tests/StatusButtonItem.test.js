import React from 'react';
import {describe, expect, it} from "@jest/globals";
import {shallow, mount} from './setupTests';
import StatusButtonItem from "../components/Restaurant/Sidebar/StatusButtonItem";

describe("StatusButtonItem", () => {
    it('should render component', () => {
        const wrapper = shallow(<StatusButtonItem currentState={{status:'open'}} options={{
            icon: 'fa-check',
            slug: 'open',
            text: 'Open'
        }}/>);
        expect(wrapper.find('button')).toBeDefined();
    });

    it('allows us to set props', () => {
        const wrapper = mount(<StatusButtonItem currentState={{status:'open'}} options={{
            icon: 'fa-check',
            slug: 'closed',
            text: 'Closed'
        }}/>);
        expect(wrapper.props().options.slug).toEqual('closed');
        wrapper.setProps({bar: 'foo'});
        expect(wrapper.props().bar).toEqual('foo');
    });

    it('simulates click events', () => {
        const mockCallBack = jest.fn().mockReturnValue('open');
        const wrapper = shallow(<StatusButtonItem currentState={{status:'open'}} onStatusSelect={mockCallBack} options={{
            icon: 'fa-check',
            slug: 'bestMatch',
            text: 'Best Match'
        }}/>);

        wrapper.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
        expect(mockCallBack.mock.results[0].value).toEqual('open');
    });
});
