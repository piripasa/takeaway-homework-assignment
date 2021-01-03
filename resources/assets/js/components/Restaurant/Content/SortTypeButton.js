import React, {Component} from 'react';

class SortTypeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortType: 'asc'
        };
        this.handleSorting = this.handleSorting.bind(this);
    }

    handleSorting() {
        if (this.state.sortType === 'asc') {
            this.setState({sortType: 'desc'})
        } else {
            this.setState({sortType: 'asc'})
        }
        this.props.onListSorting(this.state.sortType)
    }

    render() {
        return (
            <button className="btn btn-sm btn-outline-secondary" onClick={this.handleSorting}>
                <i className={`fa fa-sort-amount-${this.state.sortType}`} aria-hidden="true"/>
            </button>
        );
    }
}

export default SortTypeButton;
