import React, {Component} from 'react';

import './Navbar.css'
import logo from '../../logo.svg';

class Navbar extends Component{

    render() {
        return (
            <div id="navbar-wrapper">
                <img src={logo} className="App-logo" alt="logo" />
                nav bar
            </div>
        );
    }
}

export default Navbar;