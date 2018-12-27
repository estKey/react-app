import React, {Component} from 'react';

import './Footer.css'
import {Icon} from "antd";

let year = 2018;

class FooterContent extends Component{

    render() {
        return (
            <div id="footer-wrapper">
                <div className="-row-spaced"/>
                <ul className="media">
                    <li className="media-logo"><a target="_blank" href=" "><Icon type="facebook" /></a></li>
                    <li className="media-logo"><a target="_blank" href=" "><Icon type="instagram" /></a></li>
                    <li className="media-logo"><a target="_blank" href=" "><Icon type="linkedin" /></a></li>
                </ul>
                <div className="copyright">
                    <h5>Copyright ©  {year}  EazyTrip Inc. All rights reserved.</h5>
                </div>
                <div className="-row-spaced"/>
            </div>
        );
    }
}

export default FooterContent;