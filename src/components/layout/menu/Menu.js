import React, {Component} from 'react';

import MenuItem from './MenuItem'
import '../navbar/Navbar.css'

const route_path = [
    "/",
    "/",
    "/",
    "/",
    "/",
];
const item_name_zh = [
    "出游需求",
    "留学生服务",
    "私人定制游",
    "Vlog",
    "登录",
    "注册",
];
class Menu extends Component{

    render() {
        let index = 0;
        const classname="Menu-item";
        return (
            <ul>
                <MenuItem class={classname} route={route_path[index]} content={item_name_zh[index++]}/>
                <MenuItem class={classname} route={route_path[index]} content={item_name_zh[index++]}/>
                <MenuItem class={classname} route={route_path[index]} content={item_name_zh[index++]}/>
                <MenuItem class={classname} route={route_path[index]} content={item_name_zh[index++]}/>
                <MenuItem class={classname} route={route_path[index]} content={item_name_zh[index++]}/>
                <MenuItem class={classname} route={route_path[index]} content={item_name_zh[index]}/>
            </ul>
        );
    }
}

Menu.propTypes={
};

export default Menu;