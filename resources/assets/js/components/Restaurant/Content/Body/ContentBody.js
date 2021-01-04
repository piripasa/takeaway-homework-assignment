import React, {Component} from 'react';
import ListItem from "./ListItem";
import {getKey} from "../../../../lib/function";

class ContentBody extends Component {
    renderList() {
        const {currentState, restaurants, favourites, onFavouriteClick} = this.props
        return restaurants.map(item => {
            return <ListItem key={getKey()}
                             item={item}
                             currentState={currentState}
                             favourites={favourites}
                             onFavouriteClick={onFavouriteClick}/>
        })
    }

    render() {
        return (
            <div className="restaurant-list">
                {this.renderList()}
            </div>
        );
    }
}

export default ContentBody;
