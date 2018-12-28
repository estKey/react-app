import React, {Component} from 'react';

import menuItem from 'menuItem'
import '../layout/navbar/Navbar.css'

const routepath = [
    "/",
    "/",
    "/",
    "/",
    "/",
];
const content = [
    "MenuItem",
    "MenuItem",
    "MenuItem",
    "MenuItem",
];
class Menu extends Component{

    render() {
        const classname="Menu-item";
        return (
            <ul>
                <menuItem class={classname} route={routepath[0]} content={content[0]}/>
                <menuItem class={classname} route={routepath[0]} content={content[0]}/>
                <menuItem class={classname} route={routepath[0]} content={content[0]}/>
                <menuItem class={classname} route={routepath[0]} content={content[0]}/>
            </ul>
        );
    }
}

Menu.propTypes={

};

export default Menu;