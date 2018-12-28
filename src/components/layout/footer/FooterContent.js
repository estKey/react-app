import React, {Component} from 'react';
import {Icon} from "antd";

import './Footer.css'
import QRCode from "../../../logo.svg"
let sysDate = new Date();
let year = sysDate.getFullYear();

const phone_number = "000-000-0000";
const email_addr = "Eazytrip@outlook.com";

class FooterContent extends Component{

    render() {
        return (
            <div id="footer-wrapper">
                <div className="-row-spaced"/>
                <ul className="contact">
                    <li><h5>Phone Number: <a href={"tel:"+{phone_number}}>{phone_number}</a></h5></li>
                    <li><h5>Email Address: <a href={"mailto:"+{email_addr}}>{email_addr}</a></h5></li>
                </ul>
                <img alt="WeChat" className="media-logo" src={QRCode}/>
                <div className="-row-spaced"/>
                <ul className="media">
                    <li className="media-logo"><a target="_blank" href=" "><Icon type="facebook" /></a></li>
                    <li className="media-logo"><a target="_blank" href=" "><Icon type="twitter" /></a></li>
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