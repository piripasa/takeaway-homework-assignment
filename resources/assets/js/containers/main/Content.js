import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Restaurants from "../pages/Restaurants/Restaurants";
import Page404 from "../pages/Errors/Page404";

class Content extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" name="List" component={Restaurants} />
                <Route path="*" component={Page404} />
            </Switch>
        )
    }
}

export default Content
