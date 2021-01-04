import React, {Component} from 'react';
import {SORT_OPTIONS} from "../../../config";
import SortListItem from "./SortListItem";

class SortOptionLIst extends Component {

    renderList() {
        const {currentState, onSortingSelect} = this.props
        return SORT_OPTIONS.map(item => {
            return <SortListItem currentState={currentState} onSortingSelect={onSortingSelect} options={item}/>
        })
    }

    render() {
        return (
            <div className="list-group">
                {this.renderList()}
            </div>
        );
    }
}

export default SortOptionLIst;
