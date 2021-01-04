import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import Sidebar from "./Sidebar";
import Content from "./Content";
import {serialize} from "../../../lib/function";
import {addFavoriteRestaurant, fetchRestaurants} from "../../../actions/RestaurantAction";

class Restaurants extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sortBy: '',
            sortType: 'asc',
            status: '',
            name: '',
            favourites: [],
        };
        this.handleNameFilter = this.handleNameFilter.bind(this);
        this.handleStatusFilter = this.handleStatusFilter.bind(this);
        this.handleSortingFilter = this.handleSortingFilter.bind(this);
        this.handleListSorting = this.handleListSorting.bind(this);
        this.handleFavourite = this.handleFavourite.bind(this);
        this.handleShowFavourites = this.handleShowFavourites.bind(this);
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

    handleFavourite(name) {
        this.props.addFavoriteRestaurant({name})
    }

    handleShowFavourites(favourites) {
        this.setState({
            favourites
        }, () => this.handleFilter());
    }

    render() {
        return (
            <React.Fragment>
                <Sidebar currentState={this.state}
                         onNameTyping={this.handleNameFilter}
                         onStatusSelect={this.handleStatusFilter}
                         onSortingSelect={this.handleSortingFilter}
                         favourites={this.props.favourites}
                         onShowFavourites={this.handleShowFavourites}/>
                <Content currentState={this.state}
                         restaurants={this.props.restaurants}
                         favourites={this.props.favourites}
                         onListSorting={this.handleListSorting}
                         onFavouriteClick={this.handleFavourite}/>
            </React.Fragment>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchRestaurants,
        addFavoriteRestaurant
    }, dispatch)
}

function mapStateToProps(state) {
    return {
        restaurants: state.restaurantReducer.restaurants,
        favourites: state.restaurantReducer.favorites,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Restaurants)
