import React from 'react'
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Slider from "../components/slider/Slider";

function IndexPage() {
    return (
        <div className="Index">
            <header className="App-header">
                <Navbar/>
                header
            </header>
            <div className="App-body">
                <h1 className=" ">Yay! Welcome to IndexPage!</h1>
                <div>
                    <Slider/>
                </div>
                <div className=" " />
                <ul className=" ">
                    <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
                    <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
                </ul>
            </div>
            <footer className="App-footer">
                <Footer/>
            </footer>
        </div>
    );
}

IndexPage.propTypes = {
};

export default IndexPage;