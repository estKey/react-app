import React from 'react'
import {NavLink, Route} from "react-router-dom";
import {Layout} from 'antd';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap'

import FooterTab from "../components/layout/footer/FooterTab";
import TagButton from "../components/button/TagButton";
import {randSentence} from "../components/dashboard/mock/MockContent";
import AboutPage from "./AboutPage";
import Slider from "../components/dashboard/slider/Slider";

import "../assets/styles/style.css"
import "../assets/styles/responsive.css"
let mockcontent= randSentence(2);
const title = "EazyTrip";
export default function IndexPage(){
    const scrolltoId = (id) => {
        document.getElementById(id).scrollIntoView()
    };

    return (
        <div id="Index" style={{display:"block",height:"100%"}}>
            <section style={{height:"100%", display:"block"}}>
                <div style={{height:"100%"}} className="App-header header-content">
                    <Slider />
                </div>
                <section className="-row-spaced" style={{height:"100%", display:"block"}}>
                    <div className="App-body -row-spaced">
                        <AboutPage/>
                    </div>
                </section>
            </section>
        </div>
    );

}

IndexPage.propTypes = {
};
