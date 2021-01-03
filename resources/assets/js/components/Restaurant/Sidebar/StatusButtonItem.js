import React, {Component} from "react";

class StatusButtonItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onStatusSelect(this.props.options.slug)
    }

    render() {
        const {options} = this.props
        return (
            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={this.handleClick}>
                <i className={`fa ${options.icon}`} aria-hidden="true"/> {options.text}
            </button>
        )
    }
}

export default StatusButtonItem;
