import React, {Component} from 'react';

class Sidebar extends Component {
    render() {
        return (
            <nav className="col-md-3 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <h1>Siderbar</h1>
                </div>
            </nav>
        );
    }
}

export default Sidebar;
