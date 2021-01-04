import React, {Component} from 'react';
import SortingListItem from "./SortingListItem";
import {getKey} from "../../../../lib/function";

class SortingList extends Component {

    renderList() {
        const {currentState, sortingValues} = this.props
        return Object.keys(sortingValues).map((key, i) => {
            return (
                <SortingListItem key={getKey()} currentState={currentState} itemName={key} itemValue={sortingValues[key]}/>
            )
        })
    }

    render() {
        return (
            <ul className="list-group">
                {this.renderList()}
            </ul>
        );
    }
}

export default SortingList;
