import React from 'react';
import {NavLink} from 'react-router-dom';

import '../layout/navbar/Navbar.css'


const menuItem = () => {

        return (
            <li className={this.props.class}>
                <NavLink to={this.props.route}>
                    {this.props.content}
                </NavLink>
            </li>
        );
};

menuItem.propTypes={
    class:React.PropTypes.string,
    route:React.PropTypes.string.isRequired,
    content:React.PropTypes.string.isRequired
};

export default menuItem;