import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

import './Navbar.css'
import logo from '../../../logo.svg';


class Navbar extends Component{

    render() {
        return (
            <nav id="navbar-wrapper">
                <div>
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
                </div>
            </nav>
        );
    }
}

export default Navbar;