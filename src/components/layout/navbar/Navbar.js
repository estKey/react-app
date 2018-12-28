import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

import './Navbar.css'
import logo from '../../../logo.svg';
import Menu from "../../menu/Menu";


class Navbar extends Component{

    render() {
        return (
            <nav id="navbar-wrapper">
                <div className="container">
                    <section className="banner">
                        <NavLink to="/about" activeClassName="NavLink-active">
                            <img className="App-logo media-logo" alt="logo" title="EazyTrip Logo" src={logo}/>
                        </NavLink>
                        <NavLink to="/" activeClassName="NavLink-active">
                        <span className="title" title="EazyTrip Title">
                            EazyTrip
                        </span>
                        </NavLink>
                    </section>
                    <div className="menu-wrapper">
                        <Menu/>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;