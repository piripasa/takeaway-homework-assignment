import React from 'react';
import {describe, expect, it} from "@jest/globals";
import {shallow, mount} from './setupTests';
import FavouriteButton from "../components/Restaurant/Content/Body/FavouriteButton";

describe("FavouriteButton", () => {
    it('should render component', () => {
        const wrapper = shallow(<FavouriteButton favourites={['test']} item={{name:'test'}}/>);
        expect(wrapper.find('button')).toBeDefined();
    });

    it('simulates click events', () => {
        const mockCallBack = jest.fn().mockReturnValue('test');
        const wrapper = shallow(<FavouriteButton favourites={['test']} item={{name:'test'}} onFavouriteClick={mockCallBack}/>);

        wrapper.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
        expect(mockCallBack.mock.results[0].value).toEqual('test');
    });
});
