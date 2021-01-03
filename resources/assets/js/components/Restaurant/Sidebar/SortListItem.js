import React, {Component} from "react";

class SortListItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onSortingSelect(this.props.options.slug)
    }

    render() {
        const {options} = this.props
        return (
            <li className="list-group-item" onClick={this.handleClick}>
                <i className={`fa ${options.icon}`} aria-hidden="true"/> {options.text}
            </li>
        )
    }
}

export default SortListItem;
