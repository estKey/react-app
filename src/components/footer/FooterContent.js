import React, {Component} from 'react';

import './Footer.css'

let year = 2018;

class FooterContent extends Component{

    render() {
        return (
            <div id="footer-wrapper" className="ez-footer">
                <div className="media">
                    media
                </div>
                <div>

                </div>
                <div className="copyright">
                    <h>Copyright ©  {year}  EazyTrip Inc. All rights reserved.</h>
                </div>
            </div>
        );
    }
}

export default FooterContent;