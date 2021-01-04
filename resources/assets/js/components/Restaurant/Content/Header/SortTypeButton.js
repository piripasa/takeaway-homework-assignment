import React, {Component} from 'react';

class SortTypeButton extends Component {
    constructor(props) {
        super(props);
        this.handleSorting = this.handleSorting.bind(this);
    }

    handleSorting() {
        const sortType = this.props.currentState.sortType === 'asc' ? 'desc' : 'asc';
        this.props.onListSorting(sortType)
    }

    render() {
        return (
            <button className="btn btn-sm btn-outline-secondary" onClick={this.handleSorting}>
                <i className={`fa fa-sort-amount-${this.props.currentState.sortType}`} aria-hidden="true"/>
            </button>
        );
    }
}

export default SortTypeButton;
