import React, {Component} from 'react';

import MenuItem from './MenuItem'
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
                <MenuItem class={classname} route={routepath[0]} content={content[0]}/>
                <MenuItem class={classname} route={routepath[0]} content={content[0]}/>
                <MenuItem class={classname} route={routepath[0]} content={content[0]}/>
                <MenuItem class={classname} route={routepath[0]} content={content[0]}/>
            </ul>
        );
    }
}

Menu.propTypes={

};

export default Menu;