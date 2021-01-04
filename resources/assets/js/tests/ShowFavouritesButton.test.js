import React from 'react';
import {describe, expect, it} from "@jest/globals";
import {shallow, mount} from './setupTests';
import ShowFavouritesButton from "../components/Restaurant/Sidebar/ShowFavouritesButton";

describe("ShowFavouritesButton", () => {
    it('should render component', () => {
        const wrapper = shallow(<ShowFavouritesButton favourites={['test']}/>);
        expect(wrapper.find('button')).toBeDefined();
    });

    it('simulates click events', () => {
        const mockCallBack = jest.fn().mockReturnValue(['test']);
        const wrapper = shallow(<ShowFavouritesButton favourites={['test']} onShowFavourites={mockCallBack}/>);

        wrapper.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
        expect(mockCallBack.mock.results[0].value).toEqual(['test']);
    });
});
