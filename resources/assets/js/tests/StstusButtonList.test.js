import React from 'react';
import {describe, expect, it} from "@jest/globals";
import {mount} from './setupTests';
import {OPENING_STATUS} from "../config";
import StatusButtonList from "../components/Restaurant/Sidebar/StatusButtonList";

describe("StatusButtonList", () => {
    it('renders list-items', () => {
        const wrapper = mount(<StatusButtonList currentState={{status:'open'}} options={OPENING_STATUS}/>);
        expect(wrapper.find('button')).toBeDefined();
        expect(wrapper.find('button')).toHaveLength(OPENING_STATUS.length);
    });
});
