import React from 'react'
import {NavLink, Route} from "react-router-dom";
import {Layout} from 'antd';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap'

import FooterContent from "../components/layout/footer/FooterContent";
import TagButton from "../components/button/TagButton";
import {randSentence} from "../components/dashboard/mock/MockContent";
import AboutPage from "./AboutPage";
import Slider from "../components/dashboard/slider/Slider";

import "../assets/styles/style.css"
import "../assets/styles/responsive.css"
const {
    Header, Footer, Sider, Content,
} = Layout;

let mockcontent= randSentence(2);
const title = "EazyTrip";
export default function IndexPage(){
    const scrolltoId = (id) => {
        document.getElementById(id).scrollIntoView()
    };

    return (
        <div id="Index" style={{display:"block",height:"100%"}}>
            <section style={{height:"100%"}}>
                <Header style={{height:"100%"}} className="App-header">
                    <div className="App-header header-content">
                        <Slider />
                    </div>
                </Header>
                <section className="App-body">

                </section>
                <section className="App-footer">
                    <footer >
                        <FooterContent/>
                    </footer>
                </section>
            </section>
        </div>
    );

}

IndexPage.propTypes = {
};
