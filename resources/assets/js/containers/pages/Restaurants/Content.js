import React, {Component} from 'react';
import ContentHeader from "../../../components/Restaurant/Content/Header/ContentHeader";
import ContentBody from "../../../components/Restaurant/Content/Body/ContentBody";

class Content extends Component {
    render() {
        return (
            <main role="main" className="col-md-8 ml-sm-auto col-lg-9 pt-3 px-4">
                <ContentHeader currentState={this.props.currentState} onListSorting={this.props.onListSorting}/>
                <ContentBody currentState={this.props.currentState}
                             restaurants={this.props.restaurants}
                             favourites={this.props.favourites}
                             onFavouriteClick={this.props.onFavouriteClick}/>
            </main>
        );
    }
}

export default Content;
