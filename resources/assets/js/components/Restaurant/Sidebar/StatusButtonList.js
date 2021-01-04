import React, {Component} from 'react';
import StatusButtonItem from "./StatusButtonItem";
import {getKey} from "../../../lib/function";

class StatusButtonList extends Component {

    renderList() {
        const {currentState, onStatusSelect, options} = this.props
        return options.map(item => {
            return <StatusButtonItem key={getKey()} currentState={currentState} onStatusSelect={onStatusSelect} options={item}/>
        })
    }

    render() {
        return (
            <div className="btn-group special">
                {this.renderList()}
            </div>
        );
    }
}

export default StatusButtonList;
