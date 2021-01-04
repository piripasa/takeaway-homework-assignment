import React, {Component} from "react";
import {addFavoriteRestaurant} from "../../../../actions/RestaurantAction";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class FavouriteButton extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.addFavoriteRestaurant({ name: this.props.item.name})
    }

    render() {
        const isFavourite = this.props.favorites.includes(this.props.item.name);
        return (
            <button type="button" className="btn btn-sm btn-default" onClick={this.handleClick}>
                {
                    isFavourite ?
                        <i className="fa fa-heart" aria-hidden="true"> Remove from favorites</i> :
                        <i className="fa fa-heart-o" aria-hidden="true"> Add to favorites</i>
                }
            </button>
        )
    }
}

function mapStateToProps(state) {
    return {
        favorites: state.restaurantReducer.favorites
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addFavoriteRestaurant
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteButton)
