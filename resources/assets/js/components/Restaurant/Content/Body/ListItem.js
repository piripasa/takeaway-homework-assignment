import React, {Component} from 'react';
import SortingList from "./SortingList";

class ListItem extends Component {

    render() {
        const {item, currentState} = this.props
        return (
            <div className="card">
                <div className="card-header">{item.name}</div>
                <div className="card-body">
                    <SortingList currentState={currentState} sortingValues={item.sortingValues}/>
                </div>
                <div className="card-footer text-muted">
                    <div className="btn-group special">
                        <button type="button" className="btn btn-sm btn-default">{item.status}</button>
                        <button type="button" className="btn btn-sm btn-default">Favourite</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListItem;
