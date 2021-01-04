import React, {Component} from 'react';
import {OPENING_STATUS} from "../../../config";
import StatusButtonItem from "./StatusButtonItem";

class StatusButtonList extends Component {

    renderList() {
        const {currentState, onStatusSelect} = this.props
        return OPENING_STATUS.map(item => {
            return <StatusButtonItem currentState={currentState} onStatusSelect={onStatusSelect} options={item}/>
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
