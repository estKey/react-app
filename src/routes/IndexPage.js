import React from 'react'
import {Layout} from 'antd';

import Navbar from "../components/navbar/Navbar";
import FooterContent from "../components/footer/FooterContent";
import TagButton from "../components/Buttons/TagButton";

const {
    Header, Footer, Sider, Content,
} = Layout;

function IndexPage() {
    return (
        <div className="Index">
            <Layout>
                <Header className="App-header">
                    <Navbar/>

                </Header>
                <Layout className="App-body">
                    <h1 className=" ">Yay! Welcome to IndexPage!</h1>
                    <section>
                        <Sider>
                            <TagButton/>
                        </Sider>
                        <Content>
                            <ul className=" ">
                                <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
                                <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
                            </ul>
                        </Content>
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

IndexPage.propTypes = {
};

export default IndexPage;