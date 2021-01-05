import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import Sidebar from "./Sidebar";
import Content from "./Content";
import {serialize} from "../../../lib/function";
import {addFavoriteRestaurant, fetchRestaurants} from "../../../actions/RestaurantAction";
import {beginTheLoader, endTheLoader} from "../../../lib/startStopTheLoader";

class Restaurants extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sortBy: '',
            sortType: 'asc',
            status: '',
            name: '',
            favourites: [],
            page: 1
        };
        this.handleNameFilter = this.handleNameFilter.bind(this);
        this.handleStatusFilter = this.handleStatusFilter.bind(this);
        this.handleSortingFilter = this.handleSortingFilter.bind(this);
        this.handleListSorting = this.handleListSorting.bind(this);
        this.handleFavourite = this.handleFavourite.bind(this);
        this.handleShowFavourites = this.handleShowFavourites.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }

    componentDidMount() {
        this.setState({}, () => this.handleFilter());
    }

    handleNameFilter(name) {
        this.setState({
            name,
            page: 1
        }, () => this.handleFilter());
    }

    handleStatusFilter(status) {
        this.setState({
            status,
            page: 1
        }, () => this.handleFilter());
    }

    handleSortingFilter(sortBy) {
        this.setState({
            sortBy,
            page: 1
        }, () => this.handleFilter());
    }

    handleListSorting(sortType) {
        this.setState({
            sortType,
            page: 1
        }, () => this.handleFilter());
    }

    handleFilter() {
        beginTheLoader();
        this.props.fetchRestaurants(serialize(this.state)).then(res => {
            endTheLoader()
        });
    }

    handleFavourite(name) {
        this.props.addFavoriteRestaurant({name})
    }

    handleShowFavourites(favourites) {
        this.setState({
            favourites,
            page: 1
        }, () => this.handleFilter());
    }

    componentWillMount() {
        window.addEventListener('scroll', this.loadMore);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.loadMore);
    }

    loadMore() {
        const {pagination} = this.props
        if (pagination.current_page < pagination.total_page) {
            if (window.innerHeight + document.documentElement.scrollTop === document.scrollingElement.scrollHeight) {
                this.setState({
                    page: pagination.current_page + 1
                }, () => this.handleFilter());
            }
        }
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
        pagination: state.restaurantReducer.pagination,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Restaurants)
