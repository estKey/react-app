import React from 'react'
import {NavLink, Route} from "react-router-dom";
import {Layout} from 'antd';

import FooterContent from "../components/layout/footer/FooterContent";
import TagButton from "../components/button/TagButton";
import {randSentence} from "../components/dashboard/mock/MockContent";
import AboutPage from "./AboutPage";
import Slider from "../components/dashboard/slider/Slider";

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
        <body style={{display:"block"}}>
        <div id="Index" style={{display:"block",height:"100%"}}>
            <Layout style={{height:"100%"}}>
                <Header style={{height:"100%"}} className="App-header">
                    <div className="App-header header-content">
                        <Slider />
                    </div>
                </Header>
                <Layout className="App-body">
                    <section id={title}>
                        <Layout>
                            <Sider>
                                <div>
                                    Sider
                                    <TagButton/>
                                    {mockcontent}
                                </div>
                            </Sider>
                            <Content>
                                <div>
                                    Yay! Welcome to IndexPage!
                                    <h1 className=" ">Yay! Welcome to IndexPage!</h1>
                                    <ul className=" ">
                                        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
                                        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
                                    </ul>
                                </div>
                            </Content>
                        </Layout>
                    </section>
                    <section id="VLog">
                        <NavLink to="/vlog" activeClassName="NavLink-active"> vlog</NavLink>
                    </section>
                    <section id="About">
                        <Route path="/about" exact component={AboutPage} />
                    </section>
                </Layout>
                <section className="App-footer">
                    <Footer >
                        <FooterContent/>
                    </Footer>
                </section>
            </Layout>
        </div>
        </body>
    );

}

IndexPage.propTypes = {
};
