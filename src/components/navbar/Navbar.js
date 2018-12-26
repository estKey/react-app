import React, {Component} from 'react';

import './Navbar.css'
import logo from '../../logo.svg';

class Navbar extends Component{

    render() {
        return (
            <section id="navbar-wrapper">
                <div className="banner">
                    <img src={logo} className="App-logo" alt="logo" />
                    Eazy Trip
                </div>
                nav bar
            </section>
        );
    }
}

export default Navbar;