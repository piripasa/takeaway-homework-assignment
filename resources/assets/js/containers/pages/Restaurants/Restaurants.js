import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import Sidebar from "./Sidebar";
import Content from "./Content";
import {serialize} from "../../../lib/function";
import {fetchRestaurants} from "../../../actions/RestaurantAction";

class Restaurants extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sortBy: '',
            sortType: 'asc',
            status: '',
            keyword: '',
        };
        this.handleNameFilter = this.handleNameFilter.bind(this);
        this.handleStatusFilter = this.handleStatusFilter.bind(this);
        this.handleSortingFilter = this.handleSortingFilter.bind(this);
        this.handleListSorting = this.handleListSorting.bind(this);
    }

    componentDidMount() {
        this.setState({}, () => this.handleFilter());
    }

    handleNameFilter(name) {
        this.setState({
            name
        }, () => this.handleFilter());
    }

    handleStatusFilter(status) {
        this.setState({
            status
        }, () => this.handleFilter());
    }

    handleSortingFilter(sortBy) {
        this.setState({
            sortBy
        }, () => this.handleFilter());
    }

    handleListSorting(sortType) {
        this.setState({
            sortType
        }, () => this.handleFilter());
    }

    handleFilter() {
        this.props.fetchRestaurants(serialize(this.state));
    }

    render() {
        return (
            <React.Fragment>
                <Sidebar currentState={this.state}
                         onNameTyping={this.handleNameFilter}
                         onStatusSelect={this.handleStatusFilter}
                         onSortingSelect={this.handleSortingFilter}/>
                <Content currentState={this.state}
                         restaurants={this.props.restaurants}
                         onListSorting={this.handleListSorting}/>
            </React.Fragment>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchRestaurants
    }, dispatch)
}

function mapStateToProps(state) {
    return {
        restaurants: state.restaurantReducer.restaurants
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Restaurants)
