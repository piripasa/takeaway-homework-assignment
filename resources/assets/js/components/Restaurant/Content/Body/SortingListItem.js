import React, {Component} from 'react';
import {spaceCamel} from "../../../../lib/function";

class SortingListItem extends Component {

    render() {
        const {itemName, itemValue, currentState} = this.props
        return (
            <li className="list-group-item d-flex justify-content-between align-items-center">
                {spaceCamel(itemName)}
                <span className={`badge badge-${currentState.sortBy === itemName ? 'danger' : 'primary'} badge-pill`}>{itemValue}</span>
            </li>
        );
    }
}

export default SortingListItem;
