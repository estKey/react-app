import React from 'react'
import {Layout} from 'antd';

import Navbar from "../components/navbar/Navbar";
import FooterContent from "../components/footer/FooterContent";
import TagButton from "../components/Buttons/TagButton";
import {randSentence} from "../components/mock/MockContent";

const {
    Header, Footer, Sider, Content,
} = Layout;

let mockcontent= randSentence(2);
const title = "EazyTrip";
export default class IndexPage extends React.Component{
    render(){
        return (
            <div id="Index" style={{height:"100%"}}>
                <Layout style={{height:"100%"}}>
                    <section className="Nav-panel">
                        <Navbar/>
                    </section>
                    <Header style={{height:"100%"}} className="App-header">
                        <div className="App-header header-content">
                            <section id="TitleBar">
                                <div id="HomeTitle"
                                     onClick="document.getElementById('About').scrollIntoView()">
                                    {title}
                                </div>
                            </section>
                        </div>
                    </Header>
                    <Layout className="App-body">
                        <section>
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
                        <section id="About">
                            About
                        </section>
                    </Layout>
                    <section className="App-footer">
                        <Footer >
                            <FooterContent/>
                        </Footer>
                    </section>
                </Layout>
            </div>
        );
    }
}

IndexPage.propTypes = {
};
