import React, {Component} from "react";

class FavouriteButton extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onFavouriteClick(this.props.item.name)
    }

    render() {
        const isFavourite = this.props.favourites.includes(this.props.item.name);
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

export default FavouriteButton
