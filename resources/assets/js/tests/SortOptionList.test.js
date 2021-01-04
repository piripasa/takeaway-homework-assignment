import React from 'react';
import {describe, expect, it} from "@jest/globals";
import {mount} from './setupTests';
import SortOptionLIst from "../components/Restaurant/Sidebar/SortOptionLIst";
import {SORT_OPTIONS} from "../config";

describe("SortOptionLIst", () => {
    it('renders list-items', () => {
        const wrapper = mount(<SortOptionLIst currentState={{sortBy:'bestMatch'}} options={SORT_OPTIONS}/>);
        expect(wrapper.find('a')).toBeDefined();
        expect(wrapper.find('a')).toHaveLength(SORT_OPTIONS.length);
    });
});
