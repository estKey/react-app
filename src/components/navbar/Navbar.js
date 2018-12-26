import React, {Component} from 'react';
import { Row, Col } from 'antd';

import './Navbar.css'
import logo from '../../logo.svg';


class Navbar extends Component{

    render() {
        return (
            <div id="navbar-wrapper">
                <Row>
                    <Col span={18} push={6} className="banner">
                        <section className="banner">
                            <img src={logo} className="App-logo" alt="logo" />
                            <div>
                                EazyTrip
                            </div>
                        </section>
                    </Col>
                    <Col span={6} pull={18} >
                        content
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Navbar;