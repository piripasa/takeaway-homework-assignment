import React, {Component} from 'react'
import Logo from "../../components/Header/Logo";
import Navigation from "../../components/Header/Navigation";

class Header extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
                <Logo/>
                <Navigation/>
            </nav>
        )
    }
}

export default Header
