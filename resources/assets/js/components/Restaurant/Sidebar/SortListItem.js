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
            <a href="#" className={`list-group-item list-group-item-action ${this.props.currentState.sortBy == options.slug ? 'active' : ''}`} onClick={this.handleClick}>
                <i className={`fa ${options.icon}`} aria-hidden="true"/> {options.text}
            </a>
        )
    }
}

export default SortListItem;
