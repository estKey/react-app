import React from 'react'

function AboutPage() {
    return (
        <div id="About" style={{display:"inline-block"}}>
            <h1 className=" ">Yay! Welcome to About!</h1>
            <div className=" " />
            <ul className=" ">
                <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
                <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
            </ul>
        </div>
    );
}

AboutPage.propTypes = {
};

export default AboutPage;