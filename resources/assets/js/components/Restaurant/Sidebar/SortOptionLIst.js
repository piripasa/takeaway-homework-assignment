import React, {Component} from 'react';
import SortListItem from "./SortListItem";
import {getKey} from "../../../lib/function";

class SortOptionLIst extends Component {

    renderList() {
        const {currentState, onSortingSelect, options} = this.props
        return options.map(item => {
            return <SortListItem key={getKey()} currentState={currentState} onSortingSelect={onSortingSelect} options={item}/>
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
