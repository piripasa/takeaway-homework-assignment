import React, {Component} from 'react';
import NameFilter from "../../../components/Restaurant/Sidebar/NameFilter";
import StatusButtonList from "../../../components/Restaurant/Sidebar/StatusButtonList";
import SortOptionLIst from "../../../components/Restaurant/Sidebar/SortOptionLIst";

class Sidebar extends Component {

    render() {
        const {currentState, onStatusSelect, onSortingSelect} = this.props
        return (
            <nav className="col-md-3 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <form className="form-control">
                        <div className="form-group">
                            <NameFilter onNameTyping={this.props.onNameTyping}/>
                        </div>
                        <div className="form-group">
                            <StatusButtonList currentState={currentState} onStatusSelect={onStatusSelect}/>
                        </div>
                        <div className="form-group">
                            <SortOptionLIst currentState={currentState} onSortingSelect={onSortingSelect}/>
                        </div>
                    </form>
                </div>
            </nav>
        );
    }
}

export default Sidebar;
