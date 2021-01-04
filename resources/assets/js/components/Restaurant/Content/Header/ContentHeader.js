import React, {Component} from "react";
import SortTypeButton from "./SortTypeButton";

class ContentHeader extends Component {
    render() {
        return (
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                <h1 className="h2">Restaurant List</h1>
                <SortTypeButton currentState={this.props.currentState} onListSorting={this.props.onListSorting}/>
            </div>
        )
    }
}

export default ContentHeader;
