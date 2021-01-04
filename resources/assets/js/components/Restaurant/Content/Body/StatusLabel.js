import React, {Component} from 'react';
import {findOpeningStatusBySlug} from "../../../../lib/function";

class StatusLabel extends Component {

    render() {
        const status = findOpeningStatusBySlug(this.props.status);
        return (
            <label className="btn btn-sm btn-default"><i className={`fa ${status.icon}`}/> {status.text}</label>
        );
    }
}

export default StatusLabel;
