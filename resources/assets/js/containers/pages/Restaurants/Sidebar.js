import React, {Component} from 'react';
import NameFilter from "../../../components/Restaurant/Sidebar/NameFilter";
import StatusButtonItem from "../../../components/Restaurant/Sidebar/StatusButtonItem";
import SortListItem from "../../../components/Restaurant/Sidebar/SortListItem";

class Sidebar extends Component {
    render() {
        return (
            <nav className="col-md-3 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <form className="form-control">
                        <div className="form-group">
                            <NameFilter onNameTyping={this.props.onNameTyping}/>
                        </div>
                        <div className="form-group">
                            <div className="btn-group special">
                                <StatusButtonItem currentState={this.props.currentState} onStatusSelect={this.props.onStatusSelect} options={{icon:'fa-list', slug: '', text:'All'}}/>
                                <StatusButtonItem currentState={this.props.currentState} onStatusSelect={this.props.onStatusSelect} options={{icon:'fa-check', slug: 'open', text:'Open'}}/>
                                <StatusButtonItem currentState={this.props.currentState} onStatusSelect={this.props.onStatusSelect} options={{icon:'fa-phone', slug: 'order ahead', text:'Order Ahead'}}/>
                                <StatusButtonItem currentState={this.props.currentState} onStatusSelect={this.props.onStatusSelect} options={{icon:'fa-times-circle', slug: 'closed', text:'Closed'}}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="list-group">
                                <SortListItem currentState={this.props.currentState} onSortingSelect={this.props.onSortingSelect} options={{icon:'fa-crosshairs', slug: 'bestMatch', text:'Best Match'}}/>
                                <SortListItem currentState={this.props.currentState} onSortingSelect={this.props.onSortingSelect} options={{icon:'fa-flash', slug: 'newest', text:'Newest'}}/>
                                <SortListItem currentState={this.props.currentState} onSortingSelect={this.props.onSortingSelect} options={{icon:'fa-thumbs-up', slug: 'popularity', text:'Popularity'}}/>
                                <SortListItem currentState={this.props.currentState} onSortingSelect={this.props.onSortingSelect} options={{icon:'fa-star-o', slug: 'ratingAverage', text:'Rating Average'}}/>
                                <SortListItem currentState={this.props.currentState} onSortingSelect={this.props.onSortingSelect} options={{icon:'fa-map-marker', slug: 'distance', text:'Distance'}}/>
                                <SortListItem currentState={this.props.currentState} onSortingSelect={this.props.onSortingSelect} options={{icon:'fa-money', slug: 'minCost', text:'Minimum Costs'}}/>
                                <SortListItem currentState={this.props.currentState} onSortingSelect={this.props.onSortingSelect} options={{icon:'fa-truck', slug: 'deliveryCosts', text:'Delivery Costs'}}/>
                                <SortListItem currentState={this.props.currentState} onSortingSelect={this.props.onSortingSelect} options={{icon:'fa-shopping-basket', slug: 'averageProductPrice', text:'Average Product Price'}}/>
                            </div>
                        </div>
                    </form>
                </div>
            </nav>
        );
    }
}

export default Sidebar;
