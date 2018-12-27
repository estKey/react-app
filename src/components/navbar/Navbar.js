import React, {Component} from 'react';

import './Navbar.css'
import logo from '../../logo.svg';
import {NavLink} from "react-router-dom";


class Navbar extends Component{

    render() {
        return (
            <section id="navbar-wrapper">
                <section className="banner">
                    <NavLink to="/about">
                        <img src={logo} className="App-logo" alt="logo" />
                    </NavLink>
                    <div>
                        EazyTrip
                    </div>
                </section>
            </section>
        );
    }
}

export default Navbar;