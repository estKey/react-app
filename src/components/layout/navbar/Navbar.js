import React, {Component} from 'react';

import './Navbar.css'
import logo from '../../../logo.svg';
import {NavLink} from "react-router-dom";


class Navbar extends Component{

    render() {
        return (
            <section id="navbar-wrapper">
                <section className="banner">
                    <NavLink to="/about" activeClassName="NavLink-active">
                        <img src={logo} className="App-logo" alt="logo" />
                    </NavLink>
                    <NavLink to="/" activeClassName="NavLink-active">
                        <span className="title" title="EazyTrip">
                            EazyTrip
                        </span>
                    </NavLink>
                </section>
                <div className="container">

                </div>
            </section>
        );
    }
}

export default Navbar;