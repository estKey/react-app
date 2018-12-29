import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

import '../navbar/Navbar.css'


class MenuItem extends React.Component{
    render() {
/* props can only used in class*/
        return (
            <li className={this.props.class}>
                <NavLink to={this.props.route}>
                    {this.props.content}
                </NavLink>
            </li>
        );
    }
}

MenuItem.defaultProps ={
    class:"default",
    route:"/",
    content:"default content"
};
MenuItem.propTypes={
    class:PropTypes.string,
    route:PropTypes.string.isRequired,
    content:PropTypes.string.isRequired
};

export default MenuItem;