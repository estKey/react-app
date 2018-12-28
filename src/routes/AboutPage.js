import React from 'react'
import {randSentence} from "../components/dashboard/mock/MockContent";

const about_content = randSentence();
function AboutPage() {

    return (
        <div id="About" style={{display:"block",height:"100%"}}>
            <span className="-row-spaced"/>
            <h1 className=" ">Yay! Welcome to About!</h1>
            <div>
                <p>{about_content}</p>
            </div>
        </div>
    );
}

AboutPage.propTypes = {
};

export default AboutPage;