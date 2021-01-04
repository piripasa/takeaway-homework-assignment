import React, {Component} from "react";

class ShowFavouritesButton extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            active: false
        }
    }

    handleClick() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
        this.props.onShowFavourites(!currentState ? this.props.favourites : [])
    }

    render() {
        const {favourites} = this.props
        return (
            <button type="button" className={`btn btn-block btn-outline-warning ${this.state.active ? 'active' : ''}`} onClick={this.handleClick}>
                <span className="badge badge-danger">{favourites.length}</span> My Favourites
            </button>
        )
    }
}

export default ShowFavouritesButton;
