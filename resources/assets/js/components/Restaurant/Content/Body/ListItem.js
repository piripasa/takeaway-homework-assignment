import React, {Component} from 'react';
import SortingList from "./SortingList";
import StatusLabel from "./StatusLabel";
import FavouriteButton from "./FavouriteButton";

class ListItem extends Component {

    render() {
        const {item, currentState, favourites} = this.props
        return (
            <div className="card">
                <div className="card-header">{item.name}</div>
                <div className="card-body">
                    <SortingList currentState={currentState} sortingValues={item.sortingValues}/>
                </div>
                <div className="card-footer text-muted">
                    <div className="btn-group special">
                        <StatusLabel status={item.status}/>
                        <FavouriteButton item={item} favourites={favourites} onFavouriteClick={this.props.onFavouriteClick}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListItem;
