import React, {Component} from 'react';
import Sidebar from "./Sidebar";
import Content from "./Content";

class Restaurants extends Component {

    render() {
        return (
            <React.Fragment>
                <Sidebar/>
                <Content/>
            </React.Fragment>
        );
    }
}


export default Restaurants
